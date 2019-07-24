import withUtils from "@blaze-react/utils";
import React, { ButtonHTMLAttributes, FunctionComponent } from "react";

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
  | "link";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: JSX.Element | string;
  type?: TType;
  modifiers: TModifiers;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}

const Button: FunctionComponent<IButtonProps> = ({
  disabled,
  type,
  children,
  modifiers,
  utils: { classNames },
  ...attrs
}): JSX.Element => {
  const formatedModifiers: string = modifiers
    .split(" ")
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
};
Button.defaultProps = {
  children: "",
  disabled: false,
  modifiers: "",
  type: "button"
};

export default withUtils(Button);
