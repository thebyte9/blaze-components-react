/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, FunctionComponent } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  // submit?: boolean;
  children?: JSX.Element | string;
  modifiers?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FunctionComponent<IButtonProps> = ({
  disabled,
  // submit,
  type,
  children,
  modifiers,
  ...attrs
}): JSX.Element => {
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
  modifiers: ""
};

export default Button;
