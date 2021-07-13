import React from 'react';
import { buildClassNames } from '@blaze-react/utils';

type TType = 'button' | 'submit' | 'reset';
export interface IButtonProps {
  disabled?: boolean;
  children?: unknown;
  utilities?: string;
  modifiers?: string[];
  type?: TType;
}

export const Button = ({ children, utilities = '', ...rest }: IButtonProps): JSX.Element => {
  const { modifiers = [], disabled, type = 'button' } = rest;

  const DeprecatedButton = () => {
    console.warn('Modifiers will be deprecated in the near future. You should use CSS utilities classes instead');

    const formatedModifiers: string = modifiers.map((modifier) => `button--${modifier}`).join(' ');
    const buttonClassNames: string = buildClassNames('button', {
      [formatedModifiers]: !!modifiers,
    });

    return (
      <button disabled={disabled} className={buttonClassNames} type={type} {...rest}>
        {children}
      </button>
    );
  };

  const BlazeButton = (
    <button type="button" className={utilities} {...rest}>
      {children}
    </button>
  );

  return utilities !== '' ? BlazeButton : DeprecatedButton();
};
