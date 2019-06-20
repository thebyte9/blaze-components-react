import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  disabled,
  value,
  onChange,
  required,
  type,
  hideTypeToggle,
  modifier,
  ...attrs
}) => {
  const passwordDefaultState = {
    className: 'active',
    text: 'Show',
    icon: 'visibility_off'
  };

  const [newValue, setNewValue] = useState(value);
  const [newType, setType] = useState(type);
  const [passwordState, setPasswordState] = useState(passwordDefaultState);

  const handleChange = event => {
    setNewValue(event.target.value);
    onChange({ event, value: event.target.value });
  };

  const togglepasswordClassName = () => {
    if (passwordState.className === 'active') {
      setPasswordState({
        className: 'hide',
        text: 'Hide',
        icon: 'visibility'
      });
      setType('text');
    } else {
      setPasswordState(passwordDefaultState);
      setType('password');
    }
  };

  const isRequired = required ? 'required' : '';

  const isPassword = type === 'password';

  const setModifier = () => {
    if (modifier) return `form-field--${modifier}`;
    if (isPassword) return 'form-field--password';
    return '';
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
      {!hideTypeToggle &&
        isPassword && (
          <span
            onClick={togglepasswordClassName}
            className={`show-hide-password ${passwordState.className}`}
            role="button">
            {passwordState.text}
            <i className="material-icons">{passwordState.icon}</i>
          </span>
        )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  modifier: PropTypes.string,
  disabled: PropTypes.bool,
  hideTypeToggle: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

Input.defaultProps = {
  label: '',
  value: '',
  modifier: '',
  type: 'text',
  disabled: false,
  required: false,
  hideTypeToggle: false,
  onChange: () => {}
};

export default Input;
