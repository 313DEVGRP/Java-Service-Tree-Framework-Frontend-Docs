import { Tooltip } from '@affine/component';
import { useI18n } from '@affine/i18n';

import { ellipsisTextStyle } from './index.css';
type FilterTagProps = {
  name: string;
};

const useFilterTag = ({ name }: FilterTagProps) => {
  const t = useI18n();
  switch (name) {
    case 'Created':
      return t['Created']();
    case 'Updated':
      return t['Updated']();
    case 'Tags':
      return t['Tags']();
    case 'Is Favourited':
      return t['com.arms.filter.is-favourited']();
    case 'Is Public':
      return t['com.arms.filter.is-public']();
    case 'after':
      return t['com.arms.filter.after']();
    case 'before':
      return t['com.arms.filter.before']();
    case 'last':
      return t['com.arms.filter.last']();
    case 'is':
      return t['com.arms.filter.is']();
    case 'is not empty':
      return t['com.arms.filter.is not empty']();
    case 'is empty':
      return t['com.arms.filter.is empty']();
    case 'contains all':
      return t['com.arms.filter.contains all']();
    case 'contains one of':
      return t['com.arms.filter.contains one of']();
    case 'does not contains all':
      return t['com.arms.filter.does not contains all']();
    case 'does not contains one of':
      return t['com.arms.filter.does not contains one of']();
    case 'true':
      return t['com.arms.filter.true']();
    case 'false':
      return t['com.arms.filter.false']();
    default:
      return name;
  }
};

export const FilterTag = ({ name }: FilterTagProps) => {
  const tag = useFilterTag({ name });

  return (
    <Tooltip content={tag}>
      <span className={ellipsisTextStyle} data-testid={`filler-tag-${tag}`}>
        {tag}
      </span>
    </Tooltip>
  );
};
