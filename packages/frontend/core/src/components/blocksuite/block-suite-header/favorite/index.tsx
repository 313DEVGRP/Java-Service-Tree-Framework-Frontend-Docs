import { FavoriteTag } from '@affine/core/components/page-list';
import { track } from '@affine/core/mixpanel';
import { CompatibleFavoriteItemsAdapter } from '@affine/core/modules/properties';
import { toast } from '@affine/core/utils';
import { useI18n } from '@affine/i18n';
import { useLiveData, useService } from '@toeverything/infra';
import { useCallback } from 'react';

export interface FavoriteButtonProps {
  pageId: string;
}

export const useFavorite = (pageId: string) => {
  const t = useI18n();
  const favAdapter = useService(CompatibleFavoriteItemsAdapter);

  const favorite = useLiveData(favAdapter.isFavorite$(pageId, 'doc'));

  const toggleFavorite = useCallback(() => {
    favAdapter.toggle(pageId, 'doc');
    toast(
      favorite
        ? t['com.arms.toastMessage.removedFavorites']()
        : t['com.arms.toastMessage.addedFavorites']()
    );
  }, [favorite, pageId, t, favAdapter]);

  return { favorite, toggleFavorite };
};

export const FavoriteButton = ({ pageId }: FavoriteButtonProps) => {
  const { favorite, toggleFavorite } = useFavorite(pageId);

  const handleFavorite = useCallback(() => {
    track.$.header.actions.toggleFavorite();
    toggleFavorite();
  }, [toggleFavorite]);

  return (
    <FavoriteTag
      data-testid="pin-button"
      active={!!favorite}
      onClick={handleFavorite}
    />
  );
};
