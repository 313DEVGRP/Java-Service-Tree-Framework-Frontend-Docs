import { Button } from '@affine/component';
import { useI18n } from '@affine/i18n';
import type { ReactElement } from 'react';

import * as styles from './collection-list-header.css';

export const CollectionListHeader = ({
  node,
  onCreate,
}: {
  node: ReactElement | null;
  onCreate: () => void;
}) => {
  const t = useI18n();

  return (
    <>
      <div className={styles.collectionListHeader}>
        <div className={styles.collectionListHeaderTitle}>
          {t['com.arms.collections.header']()}
        </div>
        <Button
          className={styles.newCollectionButton}
          onClick={onCreate}
          data-testid="all-collection-new-button"
        >
          {t['com.arms.collections.empty.new-collection-button']()}
        </Button>
      </div>
      {node}
    </>
  );
};
