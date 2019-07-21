import withUtils from "@blaze-react/utils";
import React, { ButtonHTMLAttributes, FunctionComponent } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: JSX.Element | string;
  type?: "button" | "submit" | "reset";
  modifiers: string;
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
  const buttonClassNames: string = classNames("button", {
    [modifiers
      .split(" ")
      .map(modifier => `button--${modifier}`)
      .join(" ")]: !!modifiers
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
