import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from 'react';
import ToggleInputType from './ToggleInputType';
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  hideTypeToggle?: boolean;
  id?: string;
  label?: string;
  modifier?: string;
  onChange: (arg: object) => void;
  required?: boolean;
  error?: boolean;
  type?: string;
  validationMessage?: string | JSX.Element;
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
  error,
  validationMessage,
  value,
  ...attrs
}): JSX.Element => {

  const [newValue, setNewValue] = useState<string | undefined>(value);
  const [newType, setType] = useState<string | undefined>(type);

  useEffect(() => setNewValue(value), [value]);

  const handleChange = (event: any): void => {
    setNewValue(event.target.value);
    onChange({ event, value: event.target.value });
  };

  const handleToggleType = (inputType: string): void => { setType(inputType) };

  const requiredClassName = required ? 'required' : '';
  const isPassword = type === 'password';

  const setModifier = (): string => {
    if (isPassword) {
      return 'form-field--password';
    }
    if (modifier) {
      return `form-field--${modifier}`;
    }
    return "";
  };

  return (
    <div className={`form-field form-field--input ${setModifier()}`}>

      <label htmlFor={attrs.id} className={requiredClassName}>{label}</label>

      <input
        onChange={handleChange}
        value={newValue}
        disabled={disabled}
        type={newType}
        required={required}
        {...attrs}
      />

      {error && <div className="validation">
        <i className="material-icons">warning</i>
        {validationMessage}
      </div>}

      {!hideTypeToggle && isPassword && <ToggleInputType toggleType={handleToggleType} type={newType} />}

    </div>
  );
};
Input.defaultProps = {
  disabled: false,
  error: false,
  hideTypeToggle: false,
  label: '',
  modifier: '',
  onChange: (): void => {
    return;
  },
  required: false,
  type: 'text',
  validationMessage: 'This field is required',
  value: ''
};
export default Input;
