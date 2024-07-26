import React from 'react';
import { buildClassNames } from '@blaze-react/utils';
import { IButtonViewProps } from '../types';

export const ButtonView = ({
  children,
  classes = '',
  label,
  modifiers = [],
  disabled,
  type = 'button',
  ...rest
}: IButtonViewProps): JSX.Element => {
  const DeprecatedButton = () => {
    const formattedModifiers: string = modifiers.map((modifier) => `button--${modifier}`).join(' ');
    const buttonClassNames: string = buildClassNames('button', {
      [formattedModifiers]: !!modifiers,
    });

    return (
      <button disabled={disabled} className={buttonClassNames} type={type} aria-label={label} {...rest}>
        {children}
      </button>
    );
  };

  const BlazeButton = (
    <button type="button" className={classes} disabled={disabled} aria-label={label} {...rest}>
      {children}
    </button>
  );

  return classes !== '' ? BlazeButton : DeprecatedButton();
};
