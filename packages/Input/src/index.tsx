import React, { useState, FunctionComponent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean,
  hideTypeToggle?: boolean,
  id?: string,
  label?: string,
  modifier?: string,
  onChange: (...args: any[]) => any,
  required?: boolean,
  type?: string,
  value?: string,
};

interface InputComponent extends InputProps {

}

const Input: FunctionComponent<InputComponent> = ({
  disabled,
  hideTypeToggle,
  label,
  modifier,
  onChange,
  required,
  type,
  value,
  ...attrs
}) => {
  const passwordDefaultState = {
    className: "active",
    text: "Show",
    icon: "visibility_off"
  };
  const [newValue, setNewValue] = useState(value);
  const [newType, setType] = useState(type);
  const [passwordState, setPasswordState] = useState(passwordDefaultState);
  const handleChange = (event: any) => {
    setNewValue(event.target.value);
    onChange({ event, value: event.target.value });
  };
  const togglepasswordClassName = () => {
    if (passwordState.className === "active") {
      setPasswordState({
        className: "hide",
        text: "Hide",
        icon: "visibility"
      });
      setType("text");
    } else {
      setPasswordState(passwordDefaultState);
      setType("password");
    }
  };
  const isRequired = required ? "required" : "";
  const isPassword = type === "password";
  const setModifier = () => {
    if (modifier) return `form-field--${modifier}`;
    if (isPassword) return "form-field--password";
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
  label: "",
  value: "",
  modifier: "",
  type: "text",
  disabled: false,
  required: false,
  hideTypeToggle: false,
  onChange: () => { }
};
export default Input;
