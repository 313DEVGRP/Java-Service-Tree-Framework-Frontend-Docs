import {
  AnimatedDeleteIcon,
  useConfirmModal,
  useDropTarget,
} from '@affine/component';
import type { AffineDNDData } from '@affine/core/types/dnd';
import { useI18n } from '@affine/i18n';
import {
  DocsService,
  GlobalContextService,
  useLiveData,
  useService,
} from '@toeverything/infra';

import { MenuLinkItem } from '../app-sidebar';

export const TrashButton = () => {
  const t = useI18n();
  const docsService = useService(DocsService);
  const { openConfirmModal } = useConfirmModal();
  const globalContextService = useService(GlobalContextService);
  const trashActive = useLiveData(globalContextService.globalContext.isTrash.$);

  const { dropTargetRef, draggedOver } = useDropTarget<AffineDNDData>(
    () => ({
      data: {
        at: 'app-sidebar:trash',
      },
      canDrop(data) {
        return data.source.data.entity?.type === 'doc';
      },
      onDrop(data) {
        if (data.source.data.entity?.type === 'doc') {
          const docId = data.source.data.entity.id;
          const docRecord = docsService.list.doc$(docId).value;
          if (docRecord) {
            openConfirmModal({
              title: t['com.arms.moveToTrash.confirmModal.title'](),
              description: t['com.arms.moveToTrash.confirmModal.description']({
                title: docRecord.title$.value || t['Untitled'](),
              }),
              confirmText: t.Delete(),
              confirmButtonOptions: {
                variant: 'error',
              },
              onConfirm() {
                docRecord.moveToTrash();
              },
            });
          }
        }
      },
    }),
    [docsService.list, openConfirmModal, t]
  );

  return (
    <MenuLinkItem
      ref={dropTargetRef}
      icon={<AnimatedDeleteIcon closed={draggedOver} />}
      active={trashActive || draggedOver}
      to={'/trash'}
    >
      <span data-testid="trash-page">
        {t['com.arms.workspaceSubPath.trash']()}
      </span>
    </MenuLinkItem>
  );
};
