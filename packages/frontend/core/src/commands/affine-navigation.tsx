import { WorkspaceSubPath } from '@affine/core/shared';
import type { useI18n } from '@affine/i18n';
import { ArrowRightBigIcon } from '@blocksuite/icons/rc';
import type { DocCollection } from '@blocksuite/store';
import type { createStore } from 'jotai';

import { openSettingModalAtom, openWorkspaceListModalAtom } from '../atoms';
import type { useNavigateHelper } from '../hooks/use-navigate-helper';
import { track } from '../mixpanel';
import { registerAffineCommand } from './registry';

export function registerAffineNavigationCommands({
  t,
  store,
  docCollection,
  navigationHelper,
}: {
  t: ReturnType<typeof useI18n>;
  store: ReturnType<typeof createStore>;
  navigationHelper: ReturnType<typeof useNavigateHelper>;
  docCollection: DocCollection;
}) {
  const unsubs: Array<() => void> = [];
  unsubs.push(
    registerAffineCommand({
      id: 'affine:goto-all-pages',
      category: 'affine:navigation',
      icon: <ArrowRightBigIcon />,
      label: t['com.arms.cmdk.affine.navigation.goto-all-pages'](),
      run() {
        track.$.cmdk.navigation.navigate({
          to: 'allDocs',
        });

        navigationHelper.jumpToSubPath(docCollection.id, WorkspaceSubPath.ALL);
      },
    })
  );

  unsubs.push(
    registerAffineCommand({
      id: 'affine:goto-collection-list',
      category: 'affine:navigation',
      icon: <ArrowRightBigIcon />,
      label: 'Go to Collection List',
      run() {
        track.$.cmdk.navigation.navigate({
          to: 'collectionList',
        });

        navigationHelper.jumpToCollections(docCollection.id);
      },
    })
  );

  unsubs.push(
    registerAffineCommand({
      id: 'affine:goto-tag-list',
      category: 'affine:navigation',
      icon: <ArrowRightBigIcon />,
      label: 'Go to Tag List',
      run() {
        track.$.cmdk.navigation.navigate({
          to: 'tagList',
        });

        navigationHelper.jumpToTags(docCollection.id);
      },
    })
  );

  unsubs.push(
    registerAffineCommand({
      id: 'affine:goto-workspace',
      category: 'affine:navigation',
      icon: <ArrowRightBigIcon />,
      label: t['com.arms.cmdk.affine.navigation.goto-workspace'](),
      run() {
        track.$.cmdk.navigation.navigate({
          to: 'workspace',
        });

        store.set(openWorkspaceListModalAtom, true);
      },
    })
  );

  unsubs.push(
    registerAffineCommand({
      id: 'affine:open-settings',
      category: 'affine:navigation',
      icon: <ArrowRightBigIcon />,
      label: t['com.arms.cmdk.affine.navigation.open-settings'](),
      keyBinding: '$mod+,',
      run() {
        track.$.cmdk.settings.openSettings();
        store.set(openSettingModalAtom, s => ({
          activeTab: 'appearance',
          open: !s.open,
        }));
      },
    })
  );

  unsubs.push(
    registerAffineCommand({
      id: 'affine:open-account',
      category: 'affine:navigation',
      icon: <ArrowRightBigIcon />,
      label: t['com.arms.cmdk.affine.navigation.open-account-settings'](),
      run() {
        track.$.cmdk.settings.openSettings({ to: 'account' });
        store.set(openSettingModalAtom, s => ({
          activeTab: 'account',
          open: !s.open,
        }));
      },
    })
  );

  unsubs.push(
    registerAffineCommand({
      id: 'affine:goto-trash',
      category: 'affine:navigation',
      icon: <ArrowRightBigIcon />,
      label: t['com.arms.cmdk.affine.navigation.goto-trash'](),
      run() {
        track.$.cmdk.navigation.navigate({
          to: 'trash',
        });

        navigationHelper.jumpToSubPath(
          docCollection.id,
          WorkspaceSubPath.TRASH
        );
      },
    })
  );

  return () => {
    unsubs.forEach(unsub => unsub());
  };
}
