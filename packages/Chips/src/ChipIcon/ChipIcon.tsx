import { buildClassNames } from '@blaze-react/utils';
import React from 'react';

type TModifiers = 'custom' | 'delete' | string;
interface IChipIconProps {
  children: JSX.Element | JSX.Element[];
  modifier: TModifiers;
  handleRemoveChip?: () => void;
}

const ChipIcon = ({ children, modifier, handleRemoveChip }: IChipIconProps): JSX.Element => {
  const iconClassName = buildClassNames('chip__icon', {
    [`chip__icon--${modifier}`]: !!modifier,
  });

  return (
    <div className={iconClassName} onClick={handleRemoveChip}>
      {children}
    </div>
  );
};

export default ChipIcon;
