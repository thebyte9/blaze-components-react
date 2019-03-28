import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  disabled,
  value,
  onChange,
  labeleRequiredClassName,
  type,
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

  const _handleChange = (e = {
    target: {}
  }) => {
    setNewValue(e.target.value);
    onChange({ e, value: e.target.value });
  };

  const _togglepasswordClassName = () => {
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

  return (
    <Fragment>
      {label && <label htmlFor={attrs.id} className={labeleRequiredClassName}>{label}</label>}
      <input
        onChange={_handleChange}
        value={newValue}
        disabled={disabled}
        type={newType}
        {...attrs}
        />
      {type === 'password' && (
        <span onClick={_togglepasswordClassName} className={`show-hide-password ${passwordState.className}`} role="button">
          {passwordState.text}
          <i className="material-icons">{passwordState.icon}</i>
        </span>
      )}
    </Fragment>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  labeleRequiredClassName: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  labeleRequiredClassName: '',
  value: '',
  disabled: false,
  type: 'text',
  onChange: () => {}
};

export default Input;
