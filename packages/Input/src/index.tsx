import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from 'react';
import ToggleInputType from './ToggleInputType';
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  hideTypeToggle?: boolean;
  id?: string;
  label?: string;
  modifier?: string;
  onChange: (...args: any[]) => any;
  required?: boolean;
  error?: boolean;
  type?: string;
  validationMessage?: string;
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

  const handleToggleType = (t: string | undefined): void => { setType(t) };

  const isRequired = required ? 'required' : '';
  const isPassword = type === 'password';

  const setModifier = (): string => {
    if (modifier) {
      return `form-field--${modifier}`;
    }
    if (isPassword) {
      return 'form-field--password';
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

      {error && <span>{validationMessage}</span>}

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
