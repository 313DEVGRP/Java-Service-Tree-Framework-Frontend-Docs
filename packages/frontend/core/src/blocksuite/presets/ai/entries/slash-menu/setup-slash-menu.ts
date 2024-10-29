import type {
  AffineAIPanelWidget,
  AffineSlashMenuActionItem,
  AffineSlashMenuContext,
  AffineSlashMenuItem,
  AffineSlashSubMenu,
  AIItemConfig,
} from '@blocksuite/blocks';
import {
  AFFINE_AI_PANEL_WIDGET,
  AffineSlashMenuWidget,
  AIStarIcon,
  MoreHorizontalIcon,
} from '@blocksuite/blocks';
import { assertExists } from '@blocksuite/global/utils';
import { html } from 'lit';

import { AIItemGroups } from '../../_common/config';
import { handleInlineAskAIAction } from '../../actions/doc-handler';
import { AIProvider } from '../../provider';

export function setupSlashMenuEntry(slashMenu: AffineSlashMenuWidget) {
  const AIItems = AIItemGroups.map(group => group.items).flat();

  const iconWrapper = (icon: AIItemConfig['icon']) => {
    return html`<div style="color: var(--affine-primary-color)">
      ${typeof icon === 'function' ? html`${icon()}` : icon}
    </div>`;
  };

  const showWhenWrapper =
    (item?: AIItemConfig) =>
    ({ rootComponent }: AffineSlashMenuContext) => {
      const affineAIPanelWidget = rootComponent.host.view.getWidget(
        AFFINE_AI_PANEL_WIDGET,
        rootComponent.model.id
      );
      if (affineAIPanelWidget === null) return false;

      const chain = rootComponent.host.command.chain();
      const editorMode = rootComponent.service.docModeService.getMode(
        rootComponent.doc.id
      );

      return item?.showWhen?.(chain, editorMode, rootComponent.host) ?? true;
    };

  const actionItemWrapper = (
    item: AIItemConfig
  ): AffineSlashMenuActionItem => ({
    ...basicItemConfig(item),
    action: ({ rootComponent }: AffineSlashMenuContext) => {
      item?.handler?.(rootComponent.host);
    },
  });

  const subMenuWrapper = (item: AIItemConfig): AffineSlashSubMenu => {
    assertExists(item.subItem);
    return {
      ...basicItemConfig(item),
      subMenu: item.subItem.map<AffineSlashMenuActionItem>(
        ({ type, handler }) => ({
          name: type,
          action: ({ rootComponent }) => handler?.(rootComponent.host),
        })
      ),
    };
  };

  const basicItemConfig = (item: AIItemConfig) => {
    return {
      name: item.name,
      icon: iconWrapper(item.icon),
      alias: ['ai'],
      showWhen: showWhenWrapper(item),
    };
  };

  
  const menu = slashMenu.config.items.slice();
  /* DrawIo 추가 */
  menu.unshift({
    name: 'DrawIO',
    icon: AIStarIcon,
    showWhen: showWhenWrapper(),
    action: () => {
      window.open('http://www.313.co.kr/reference/drawio/', '_blank');
    },
  });
  /* AIMenuItems, Ask AI 메뉴 삭제 */
  slashMenu.config = {
    ...AffineSlashMenuWidget.DEFAULT_CONFIG,
    items: menu,
  };
}
