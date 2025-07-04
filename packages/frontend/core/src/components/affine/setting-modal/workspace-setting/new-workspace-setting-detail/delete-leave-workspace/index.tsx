import { notify } from '@affine/component';
import { SettingRow } from '@affine/component/setting-components';
import { ConfirmModal } from '@affine/component/ui/modal';
import { useAsyncCallback } from '@affine/core/hooks/affine-async-hooks';
import { WorkspacePermissionService } from '@affine/core/modules/permissions';
import { useI18n } from '@affine/i18n';
import { ArrowRightSmallIcon } from '@blocksuite/icons/rc';
import {
  GlobalContextService,
  useLiveData,
  useServices,
  WorkspaceService,
  WorkspacesService,
} from '@toeverything/infra';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';

import { openSettingModalAtom } from '../../../../../../atoms';
import {
  RouteLogic,
  useNavigateHelper,
} from '../../../../../../hooks/use-navigate-helper';
import { WorkspaceSubPath } from '../../../../../../shared';
import { WorkspaceDeleteModal } from './delete';

export const DeleteLeaveWorkspace = () => {
  const {
    workspaceService,
    globalContextService,
    workspacePermissionService,
    workspacesService,
  } = useServices({
    WorkspaceService,
    GlobalContextService,
    WorkspacePermissionService,
    WorkspacesService,
  });
  const t = useI18n();
  const workspace = workspaceService.workspace;
  const { jumpToSubPath, jumpToIndex } = useNavigateHelper();
  // fixme: cloud regression
  const [showDelete, setShowDelete] = useState(false);
  const [showLeave, setShowLeave] = useState(false);
  const setSettingModal = useSetAtom(openSettingModalAtom);

  const workspaceList = useLiveData(workspacesService.list.workspaces$);
  const currentWorkspaceId = useLiveData(
    globalContextService.globalContext.workspaceId.$
  );

  const isOwner = useLiveData(workspacePermissionService.permission.isOwner$);
  useEffect(() => {
    workspacePermissionService.permission.revalidate();
  }, [workspacePermissionService]);

  const onLeaveOrDelete = useCallback(() => {
    if (isOwner !== null) {
      if (isOwner) {
        setShowDelete(true);
      } else {
        setShowLeave(true);
      }
    }
  }, [isOwner]);

  const onDeleteConfirm = useAsyncCallback(async () => {
    setSettingModal(prev => ({ ...prev, open: false, workspaceId: null }));

    if (currentWorkspaceId === workspace.id) {
      const backWorkspace = workspaceList.find(
        ws => ws.id !== currentWorkspaceId
      );
      // TODO(@eyhn): if there is no workspace, jump to a new page(wait for design)
      if (backWorkspace) {
        jumpToSubPath(
          backWorkspace?.id || '',
          WorkspaceSubPath.ALL,
          RouteLogic.REPLACE
        );
      } else {
        jumpToIndex(RouteLogic.REPLACE);
      }
    }

    if (isOwner) {
      await workspacesService.deleteWorkspace(workspace.meta);
    } else {
      await workspacePermissionService.leaveWorkspace();
    }
    notify.success({ title: t['Successfully deleted']() });
  }, [
    setSettingModal,
    currentWorkspaceId,
    workspace.id,
    workspace.meta,
    isOwner,
    t,
    workspaceList,
    jumpToSubPath,
    jumpToIndex,
    workspacesService,
    workspacePermissionService,
  ]);

  return (
    <>
      <SettingRow
        name={
          <span style={{ color: 'var(--affine-error-color)' }}>
            {isOwner
              ? t['com.arms.workspaceDelete.title']()
              : t['com.arms.deleteLeaveWorkspace.leave']()}
          </span>
        }
        desc={t['com.arms.deleteLeaveWorkspace.description']()}
        style={{ cursor: 'pointer' }}
        onClick={onLeaveOrDelete}
        data-testid="delete-workspace-button"
      >
        <ArrowRightSmallIcon />
      </SettingRow>
      {isOwner ? (
        <WorkspaceDeleteModal
          onConfirm={onDeleteConfirm}
          open={showDelete}
          onOpenChange={setShowDelete}
          workspaceMetadata={workspace.meta}
        />
      ) : (
        <ConfirmModal
          open={showLeave}
          cancelText={t['com.arms.confirmModal.button.cancel']()}
          onConfirm={onDeleteConfirm}
          onOpenChange={setShowLeave}
          title={`${t['com.arms.deleteLeaveWorkspace.leave']()}?`}
          description={t['com.arms.deleteLeaveWorkspace.leaveDescription']()}
          confirmText={t['Leave']()}
          confirmButtonOptions={{
            variant: 'error',
          }}
        />
      )}
    </>
  );
};
