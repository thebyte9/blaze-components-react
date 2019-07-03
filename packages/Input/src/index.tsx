import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  hideTypeToggle?: boolean;
  id?: string;
  label?: string;
  modifier?: string;
  onChange: (...args: any[]) => any;
  required?: boolean;
  type?: string;
  value?: string;
}

const Input: FunctionComponent<IInputProps> = ({
  disabled,
  hideTypeToggle,
  label,
  modifier,
  onChange,
  required,
  type,
  value,
  ...attrs
}): JSX.Element => {
  interface IPasswordState {
    className: string,
    icon: string,
    text: string
  }

  const passwordDefaultState: IPasswordState = {
    className: "active",
    icon: "visibility_off",
    text: "Show"
  };

  const [newValue, setNewValue] = useState(value);
  const [newType, setType] = useState(type);
  const [passwordState, setPasswordState] = useState(passwordDefaultState);

  useEffect(() => setNewValue(value), [value]);

  const handleChange = (event: any): void => {
    setNewValue(event.target.value);
    onChange({ event, value: event.target.value });
  };

  const togglepasswordClassName = (): void => {
    if (passwordState.className === "active") {
      setPasswordState({
        className: "hide",
        icon: "visibility",
        text: "Hide"
      });
      setType("text");
    } else {
      setPasswordState(passwordDefaultState);
      setType("password");
    }
  };

  const isRequired = required ? "required" : "";
  const isPassword = type === "password";

  const setModifier = (): string => {
    if (modifier) {
      return `form-field--${modifier}`;
    }
    if (isPassword) {
      return "form-field--password";
    }
    return "";
  };

  return (
    <div className={`form-field form-field--input ${setModifier()}`}>
      {label && (
        <label htmlFor={attrs.id} className={isRequired}>
          {label}
        </label>
      )}
      <input
        onChange={handleChange}
        value={newValue}
        disabled={disabled}
        type={newType}
        required={required}
        {...attrs}
      />
      {!hideTypeToggle && isPassword && (
        <span
          onClick={togglepasswordClassName}
          className={`show-hide-password ${passwordState.className}`}
          role="button"
        >
          {passwordState.text}
          <i className="material-icons">{passwordState.icon}</i>
        </span>
      )}
    </div>
  );
};
Input.defaultProps = {
  disabled: false,
  hideTypeToggle: false,
  label: "",
  modifier: "",
  onChange: (): void => {
    return;
  },
  required: false,
  type: "text",
  value: ""
};
export default Input;
