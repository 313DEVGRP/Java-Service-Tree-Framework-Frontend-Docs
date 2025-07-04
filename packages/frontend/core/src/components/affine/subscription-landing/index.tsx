import { AuthPageContainer } from '@affine/component/auth-components';
import { Button } from '@affine/component/ui/button';
import { useSubscriptionNotifyWriter } from '@affine/core/hooks/affine/use-subscription-notify';
import { useNavigateHelper } from '@affine/core/hooks/use-navigate-helper';
import { Trans, useI18n } from '@affine/i18n';
import { type ReactNode, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as styles from './styles.css';

const UpgradeSuccessLayout = ({
  title,
  description,
}: {
  title?: ReactNode;
  description?: ReactNode;
}) => {
  const t = useI18n();
  const [params] = useSearchParams();

  const { jumpToIndex, openInApp } = useNavigateHelper();
  const openAffine = useCallback(() => {
    if (params.get('schema')) {
      openInApp(params.get('schema') ?? 'affine', 'bring-to-front');
    } else {
      jumpToIndex();
    }
  }, [jumpToIndex, openInApp, params]);

  const subtitle = (
    <div className={styles.leftContentText}>
      {description}
      <div>
        <Trans
          i18nKey={'com.arms.payment.upgrade-success-page.support'}
          components={{
            1: (
              <a
                href="mailto:support@toeverything.info"
                className={styles.mail}
              />
            ),
          }}
        />
      </div>
    </div>
  );

  return (
    <AuthPageContainer title={title} subtitle={subtitle}>
      <Button variant="primary" size="extraLarge" onClick={openAffine}>
        {t['com.arms.other-page.nav.open-affine']()}
      </Button>
    </AuthPageContainer>
  );
};

export const CloudUpgradeSuccess = () => {
  const t = useI18n();
  useSubscriptionNotifyWriter();
  return (
    <UpgradeSuccessLayout
      title={t['com.arms.payment.upgrade-success-page.title']()}
      description={t['com.arms.payment.upgrade-success-page.text']()}
    />
  );
};

export const AIUpgradeSuccess = () => {
  const t = useI18n();
  useSubscriptionNotifyWriter();
  return (
    <UpgradeSuccessLayout
      title={t['com.arms.payment.ai-upgrade-success-page.title']()}
      description={t['com.arms.payment.ai-upgrade-success-page.text']()}
    />
  );
};
