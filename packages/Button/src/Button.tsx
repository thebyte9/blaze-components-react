import React, { ButtonHTMLAttributes } from 'react';
import { buildClassNames } from '@blaze-react/utils';

type TType = 'button' | 'submit' | 'reset';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: JSX.Element | string;
  type?: TType;
  modifiers?: string[];
}

const Button = ({ disabled, type, children, modifiers = [], ...attrs }: IButtonProps): JSX.Element => {
  const formatedModifiers: string = modifiers.map((modifier) => `button--${modifier}`).join(' ');
  const buttonClassNames: string = buildClassNames('button', {
    [formatedModifiers]: !!modifiers,
  });

  return (
    <button disabled={disabled} className={buttonClassNames} type={type} {...attrs}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: '',
  disabled: false,
  type: 'button',
};

export default Button;
