import { useI18n } from '@affine/i18n';

import type { ConfirmModalProps } from '../../ui/modal';
import { ConfirmModal } from '../../ui/modal';

export const PublicLinkDisableModal = (props: ConfirmModalProps) => {
  const t = useI18n();

  return (
    <ConfirmModal
      title={t['com.arms.publicLinkDisableModal.title']()}
      description={t['com.arms.publicLinkDisableModal.description']()}
      cancelText={t['com.arms.publicLinkDisableModal.button.cancel']()}
      confirmText={t['com.arms.publicLinkDisableModal.button.disable']()}
      confirmButtonOptions={{
        variant: 'error',
        ['data-testid' as string]: 'confirm-enable-affine-cloud-button',
      }}
      {...props}
    />
  );
};
