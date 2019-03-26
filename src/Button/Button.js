import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => (
  <button type="button" onClick={() => null} className={`${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: null
};

export default Button;
