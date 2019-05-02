/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  disabled,
  isSubmit,
  children,
  ...attrs
}) => {
  const type = (isSubmit) ? 'submit' : 'button';
    
  return (
    <button disabled={disabled} type={type} {...attrs}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Button.defaultProps = {
  children: null,
  disabled: false,
  isSubmit: false
};

export default Button;
