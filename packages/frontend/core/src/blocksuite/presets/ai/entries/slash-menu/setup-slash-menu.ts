import type {
  AffineSlashMenuContext,
  AIItemConfig,
} from '@blocksuite/blocks';
import {
  AFFINE_AI_PANEL_WIDGET,
  AffineSlashMenuWidget,
  AIStarIcon,
} from '@blocksuite/blocks';

export function setupSlashMenuEntry(slashMenu: AffineSlashMenuWidget) {

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

  const menu = slashMenu.config.items.slice();
  /* DrawIo 추가 */
  menu.unshift({
    name: 'DrawIO',
    icon: AIStarIcon,
    showWhen: showWhenWrapper(),
    action: () => {
      window.open('https://www.a-rms.net/reference/drawio/', '_blank');
    },
  });
  /* AIMenuItems, Ask AI 메뉴 삭제 */
  slashMenu.config = {
    ...AffineSlashMenuWidget.DEFAULT_CONFIG,
    items: menu,
  };
}
