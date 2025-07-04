import { OverlayModal } from '@affine/component';
import { openStarAFFiNEModalAtom } from '@affine/core/atoms';
import { useI18n } from '@affine/i18n';
import { useAtom } from 'jotai';

export const StarAFFiNEModal = () => {
  const t = useI18n();
  const [open, setOpen] = useAtom(openStarAFFiNEModalAtom);

  return (
    <OverlayModal
      open={open}
      topImage={
        <video
          width={400}
          height={300}
          style={{ objectFit: 'cover' }}
          src={'/static/githubStar.mp4'}
          autoPlay
          loop
        />
      }
      title={t['com.arms.star-affine.title']()}
      onOpenChange={setOpen}
      description={t['com.arms.star-affine.description']()}
      cancelText={t['com.arms.star-affine.cancel']()}
      to={runtimeConfig.githubUrl}
      confirmButtonOptions={{
        variant: 'primary',
      }}
      confirmText={t['com.arms.star-affine.confirm']()}
      external
    />
  );
};
