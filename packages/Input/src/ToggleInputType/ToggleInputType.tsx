import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface IToggleInputTypeProps {
  type: string | undefined;
  toggleType: (newType: string) => void;
}

interface IPasswordState {
  icon: JSX.Element;
  status: string;
  text: string;
}

const ToggleInputType = ({
  type,
  toggleType
}: IToggleInputTypeProps): JSX.Element => {
  const passwordDefaultClasses: IPasswordState = {
    icon: <MdVisibility />,
    status: "active",
    text: "Show"
  };

  const passwordActiveClasses: IPasswordState = {
    icon: <MdVisibilityOff />,
    status: "hide",
    text: "Hide"
  };

  const [passwordClasses, setPasswordState] = useState<IPasswordState>(
    passwordDefaultClasses
  );

  const isPassword = type === "password";

  const handleToggleClasses = (): void => {
    if (isPassword) {
      setPasswordState(passwordActiveClasses);
      toggleType("text");
    } else {
      setPasswordState(passwordDefaultClasses);
      toggleType("password");
    }
  };

  const { status, icon, text }: IPasswordState = passwordClasses;

  return (
    <span
      data-testid="toggle-input-type"
      onClick={handleToggleClasses}
      className={`show-hide-password ${status}`}
      role="button"
    >
      {icon}
      {text}
    </span>
  );
};

export default ToggleInputType;
