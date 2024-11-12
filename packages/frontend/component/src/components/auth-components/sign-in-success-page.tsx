import { useI18n } from '@affine/i18n';
import type { FC } from 'react';

import { Button } from '../../ui/button';
import { AuthPageContainer } from './auth-page-container';

export const SignInSuccessPage: FC<{
  onOpenAffine: () => void;
}> = ({ onOpenAffine }) => {
  const t = useI18n();
  return (
    <AuthPageContainer
      title={t['com.arms.auth.signed.success.title']()}
      subtitle={t['com.arms.auth.signed.success.subtitle']()}
    >
      <Button variant="primary" size="large" onClick={onOpenAffine}>
        {t['com.arms.auth.open.affine']()}
      </Button>
    </AuthPageContainer>
  );
};
