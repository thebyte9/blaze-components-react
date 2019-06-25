/* eslint-disable react/button-has-type */
import React from "react";

type ButtonProps = {
  disabled?: boolean;
  submit?: boolean;
  children?: JSX.Element | string;
  modifiers?: string;
  attrs?: any;
}

const Button: React.SFC<ButtonProps> = ({
  disabled,
  submit,
  children,
  modifiers,
  ...attrs
}): JSX.Element => {
  const _type = submit ? "submit" : "button";
  const _modifiers = modifiers && modifiers
    .split(" ")
    .map(modifier => `button--${modifier}`)
    .join(" ");
  return (
    <button
      disabled={disabled}
      className={`button ${_modifiers}`}
      type={_type}
      {...attrs}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  modifiers: "",
  disabled: false,
  submit: false,
  children: ""
};

export default Button;
