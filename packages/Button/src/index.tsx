/* eslint-disable react/button-has-type */
import React from "react";

interface IButtonProps {
  disabled?: boolean;
  submit?: boolean;
  children?: JSX.Element | string;
  modifiers?: string;
  attrs?: any;
}

const Button: React.SFC<IButtonProps> = ({
  disabled,
  submit,
  children,
  modifiers,
  ...attrs
}): JSX.Element => {
  const type = submit ? "submit" : "button";
  const allModifiers =
    modifiers &&
    modifiers
      .split(" ")
      .map(modifier => `button--${modifier}`)
      .join(" ");
  return (
    <button
      disabled={disabled}
      className={`button ${allModifiers}`}
      type={type}
      {...attrs}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  children: "",
  disabled: false,
  modifiers: "",
  submit: false
};

export default Button;
