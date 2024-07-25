import withUtils from "@blaze-react/utils";
import React, { ButtonHTMLAttributes } from "react";

type TType = "button" | "submit" | "reset";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: JSX.Element | string;
  type?: TType;
  modifiers?: string[];
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
      .map((modifier) => `button--${modifier}`)
      .join(" ");

    const buttonClassNames: string = classNames("button", {
      [formatedModifiers]: !!modifiers,
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

Button.defaultProps = {
  children: "",
  disabled: false,
  type: "button",
};

export default Button;
