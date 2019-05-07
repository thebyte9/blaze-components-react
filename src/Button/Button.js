/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  disabled,
  submit,
  children,
  modifiers,
  ...attrs
}) => {
  const _type = submit ? 'submit' : 'button';

  const _modifiers = modifiers.split(' ').map(modifier => `button--${modifier}`).join(' ');
    
  return (
    <button disabled={disabled} className={`button ${_modifiers}`} type={_type} {...attrs}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
  modifiers: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Button.defaultProps = {
  children: null,
  disabled: false,
  submit: false,
  modifiers: ''
};

export default Button;
