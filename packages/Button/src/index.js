/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, submit, children, modifiers, ...attrs }) => {
  const _type = submit ? 'submit' : 'button';

  const _modifiers = modifiers
    .split(' ')
    .map(modifier => `button--${modifier}`)
    .join(' ');

  return (
    <button disabled={disabled} className={`button ${_modifiers}`} type={_type} {...attrs}>
      {children}
    </button>
  );
};

Button.propTypes = {
  modifiers: PropTypes.string,
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Button.defaultProps = {
  modifiers: '',
  disabled: false,
  submit: false,
  children: null
};

export default Button;
