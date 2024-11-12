import { AuthPageContainer } from '@affine/component/auth-components';
import { Button } from '@affine/component/ui/button';
import { useI18n } from '@affine/i18n';
import { useCallback } from 'react';

import { RouteLogic, useNavigateHelper } from '../hooks/use-navigate-helper';

export const Component = () => {
  const t = useI18n();
  const { jumpToIndex } = useNavigateHelper();
  const onOpenAffine = useCallback(() => {
    jumpToIndex(RouteLogic.REPLACE);
  }, [jumpToIndex]);

  return (
    <AuthPageContainer
      title={t['com.arms.expired.page.title']()}
      subtitle={t['com.arms.expired.page.subtitle']()}
    >
      <Button variant="primary" size="large" onClick={onOpenAffine}>
        {t['com.arms.auth.open.affine']()}
      </Button>
    </AuthPageContainer>
  );
};
