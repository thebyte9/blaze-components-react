import Utils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useState } from "react";
import ToggleInputType from "./ToggleInputType";

// interface IInputProps {
//   disabled?: boolean;
//   hideTypeToggle?: boolean;
//   id?: string;
//   label?: string;
//   modifier?: string;
//   onChange: ({
//     event,
//     value
//   }: {
//     event: React.ChangeEvent<HTMLInputElement>;
//     value: string;
//   }) => void;
//   required?: boolean;
//   error?: boolean;
//   type?: string;
//   validationMessage: string | JSX.Element;
//   value?: string;
// }

const { classNames, ErrorMessage, uniqueId }: any = Utils;
console.log(classNames, ErrorMessage);

const Input: FunctionComponent<any> = ({
  disabled,
  hideTypeToggle,
  label,
  modifier,
  onChange,
  required,
  type,
  error,
  validationMessage,
  value,
  ...attrs
}): JSX.Element => {
  const [newValue, setNewValue] = useState<string | undefined>(value);
  const [newType, setType] = useState<string | undefined>(type);
  useEffect(() => {
    setNewValue(value);
    setTimeout(() => {
      uniqueId.then((a: any) => console.log(a));
    }, 4000);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputValue }
    } = event;
    setNewValue(inputValue);
    onChange({ event, value: inputValue });
  };

  const handleToggleType = (inputType: string): void => {
    setType(inputType);
  };

  const password: string = "password";

  const isPassword = type === password;

  const requiredClassName: string = classNames({ required });

  const passwordClassName: string = classNames({
    "form-field--password": isPassword
  });

  const modifierClassName: string = classNames({
    [`form-field--${modifier}`]: !!modifier
  });

  return (
    <div
      className={`form-field form-field--input ${modifierClassName} ${passwordClassName}`}
    >
      <label htmlFor={attrs.id} className={requiredClassName}>
        {label}
      </label>

      <input
        data-testid="input"
        onChange={handleChange}
        value={newValue}
        disabled={disabled}
        type={newType}
        required={required}
        {...attrs}
      />

      {error && <ErrorMessage message={validationMessage} />}

      {!hideTypeToggle && isPassword && (
        <ToggleInputType toggleType={handleToggleType} type={newType} />
      )}
    </div>
  );
};
Input.defaultProps = {
  disabled: false,
  error: false,
  hideTypeToggle: false,
  label: "",
  modifier: "",
  required: false,
  type: "text",
  validationMessage: "This field is required",
  value: ""
};
export default Input;
