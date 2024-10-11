import { RadioGroup, type RadioItem, toast, Tooltip } from '@affine/component';
import { registerAffineCommand } from '@affine/core/commands';
import { track } from '@affine/core/mixpanel';
import { useI18n } from '@affine/i18n';
import { PageIcon } from '@blocksuite/icons/rc';
import {
  type DocMode,
  DocsService,
  useLiveData,
  useService,
} from '@toeverything/infra';
import { useCallback, useEffect, useMemo } from 'react';

import { switchItem } from './style.css';
import {PageSwitchItem } from './switch-items';

export interface EditorModeSwitchProps {
  pageId: string;
  isPublic?: boolean;
  publicMode?: DocMode;
}

const PageRadioItem: RadioItem = {
  value: 'page',
  label: <PageSwitchItem />,
  testId: 'switch-page-mode-button',
  className: switchItem,
};

export const EditorModeSwitch = ({
  pageId,
  isPublic,
  publicMode,
}: EditorModeSwitchProps) => {
  const t = useI18n();
  const docsService = useService(DocsService);
  const doc = useLiveData(docsService.list.doc$(pageId));
  const trash = useLiveData(doc?.trash$);
  const currentMode = useLiveData(doc?.mode$);

  const togglePage = useCallback(() => {
    if (currentMode === 'page' || isPublic || trash) return;
    doc?.setMode('page');
    toast(t['com.affine.toastMessage.pageMode']());
    track.$.header.actions.switchPageMode({ mode: 'page' });
  }, [currentMode, doc, isPublic, t, trash]);

  const onModeChange = useCallback(
    (mode: DocMode) => {
     if (mode === 'page') togglePage() ;
    },
    [togglePage]
  );

  const shouldHide = useCallback(
    (mode: DocMode) =>
      (trash && currentMode !== mode) || (isPublic && publicMode !== mode),
    [currentMode, isPublic, publicMode, trash]
  );

  useEffect(() => {
    if (trash || isPublic || currentMode === undefined) return;
    return registerAffineCommand({
      id: 'affine:doc-mode-switch',
      category: 'editor:page',
      label: t['com.affine.cmdk.switch-to-page'](),
      icon: <PageIcon />,
      keyBinding: {
        binding: 'Alt+KeyS',
        capture: true,
      },
      run: () => onModeChange('page'),
    });
  }, [currentMode, isPublic, onModeChange, t, trash]);

  return (
    <Tooltip
      content={t['Switch']()}
      shortcut={['$alt', 'S']}
      side="bottom"
      options={{ hidden: isPublic || trash }}
    >
      <div>
        <PureEditorModeSwitch
          mode={currentMode}
          setMode={onModeChange}
          hidePage={shouldHide('page')}
        />
      </div>
    </Tooltip>
  );
};

export interface PureEditorModeSwitchProps {
  mode?: DocMode;
  setMode: (mode: DocMode) => void;
  hidePage?: boolean;
}

export const PureEditorModeSwitch = ({
  mode,
  setMode,
  hidePage,
}: PureEditorModeSwitchProps) => {
  const items = useMemo(
    () => [
      ...(hidePage ? [] : [PageRadioItem]),
    ],
    [hidePage]
  );
  return (
    <RadioGroup
      iconMode
      itemHeight={24}
      borderRadius={8}
      padding={4}
      gap={8}
      value={mode}
      items={items}
      onChange={setMode}
    />
  );
};
