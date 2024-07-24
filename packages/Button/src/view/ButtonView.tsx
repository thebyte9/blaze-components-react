import React from 'react';
import { buildClassNames } from '@blaze-react/utils';
import { IButtonViewProps } from '../types';

export const ButtonView = ({ children, classes = '', label, ...rest }: IButtonViewProps): JSX.Element => {
  const { modifiers = [], disabled, type = 'button' } = rest;

  const DeprecatedButton = () => {
    console.warn('Modifiers will be deprecated in the near future. You should use CSS classes classes instead.');

    const formattedModifiers: string = modifiers.map((modifier) => `button--${modifier}`).join(' ');
    const buttonClassNames: string = buildClassNames('button', {
      [formattedModifiers]: !!modifiers,
    });

    return (
      <button
        disabled={disabled}
        className={buttonClassNames}
        type={type}
        aria-label={label}
        {...rest}
      >
        {children}
      </button>
    );
  };

  const BlazeButton = (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      aria-label={label} // Add aria-label here
      {...rest}
    >
      {children}
    </button>
  );

  return classes !== '' ? BlazeButton : DeprecatedButton();
};
