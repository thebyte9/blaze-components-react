import withUtils from "@blaze-react/utils";
import React, { ButtonHTMLAttributes } from "react";

type TType = "button" | "submit" | "reset";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: JSX.Element | string;
  type?: TType;
  modifiers?: string[];
  utils: {
    buildClassNames: (className: string | object, optionalClassNames?: object) => string;
  };
}

const Button = withUtils(
  ({
    disabled,
    type,
    children,
    modifiers = [],
    utils: { buildClassNames },
    ...attrs
  }: IButtonProps): JSX.Element => {
    const formatedModifiers: string = modifiers
      .map((modifier) => `button--${modifier}`)
      .join(" ");
    const buttonClassNames: string = buildClassNames("button", {
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
