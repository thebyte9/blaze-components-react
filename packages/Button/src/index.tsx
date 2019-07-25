import withUtils from "@blaze-react/utils";
import React, { ButtonHTMLAttributes } from "react";

type TType = "button" | "submit" | "reset";
type TModifiers =
  | ""
  | "rounded"
  | "outline"
  | "alert"
  | "cta"
  | "light"
  | "dark"
  | "disabled"
  | "icon"
  | "small"
  | "full-width"
  | "back"
  | "plain"
  | "link";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: JSX.Element | string;
  type?: TType;
  modifiers?: TModifiers[];
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}

const Button = withUtils(
  ({
    disabled,
    type,
    children,
    modifiers = [],
    utils: { classNames },
    ...attrs
  }: IButtonProps): JSX.Element => {
    const formatedModifiers: string = modifiers
      .map(modifier => `button--${modifier}`)
      .join(" ");

    const buttonClassNames: string = classNames("button", {
      [formatedModifiers]: !!modifiers
    });
    return (
      <button
        disabled={disabled}
        className={buttonClassNames}
        type={type}
        {...attrs}
      >
        {children}
      </button>
    );
  }
);
const availableModifiers: object = {
  alert: "alert",
  back: "back",
  cta: "cta",
  dark: "dark",
  disabled: "disabled",
  fullWidth: "full-width",
  icon: "icon",
  light: "light",
  link: "link",
  outline: "outline",
  plain: "plain",
  rounded: "rounded",
  small: "small"
};

Button.availableModifiers = availableModifiers;

Button.defaultProps = {
  children: "",
  disabled: false,
  type: "button"
};

export default Button;
