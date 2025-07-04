import { OverlayModal } from '@affine/component';
import { openIssueFeedbackModalAtom } from '@affine/core/atoms';
import { useI18n } from '@affine/i18n';
import { useAtom } from 'jotai';

export const IssueFeedbackModal = () => {
  const t = useI18n();
  const [open, setOpen] = useAtom(openIssueFeedbackModalAtom);

  return (
    <OverlayModal
      open={open}
      topImage={
        <video
          width={400}
          height={300}
          style={{ objectFit: 'cover' }}
          src={'/static/newIssue.mp4'}
          autoPlay
          loop
        />
      }
      title={t['com.arms.issue-feedback.title']()}
      onOpenChange={setOpen}
      description={t['com.arms.issue-feedback.description']()}
      cancelText={t['com.arms.issue-feedback.cancel']()}
      to={`${runtimeConfig.githubUrl}/issues/new/choose`}
      confirmText={t['com.arms.issue-feedback.confirm']()}
      confirmButtonOptions={{
        variant: 'primary',
      }}
      external
    />
  );
};
