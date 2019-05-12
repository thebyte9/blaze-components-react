import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  disabled,
  value,
  onChange,
  required,
  type,
  hideTypeToggle,
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

  const handleChange = (event) => {
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

  return (
    <Fragment>
      {label && <label htmlFor={attrs.id} className={isRequired}>{label}</label>}
      <input
        onChange={handleChange}
        value={newValue}
        disabled={disabled}
        type={newType}
        required={required}
        {...attrs}
        />
      {!hideTypeToggle && type === 'password' && (
        <span onClick={togglepasswordClassName} className={`show-hide-password ${passwordState.className}`} role="button">
          {passwordState.text}
          <i className="material-icons">{passwordState.icon}</i>
        </span>
      )}
    </Fragment>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  hideTypeToggle: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

Input.defaultProps = {
  label: '',
  value: '',
  type: 'text',
  disabled: false,
  required: false,
  hideTypeToggle: false,
  onChange: () => {}
};

export default Input;
