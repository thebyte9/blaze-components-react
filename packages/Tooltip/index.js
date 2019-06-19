import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ children, position, text }) => (
  <div className="tooltip-here">
    {children}
    <span className={`tooltip tooltip--${position}`}>{text}</span>
  </div>
);

Tooltip.propTypes = {
  position: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Tooltip.defaultProps = {
  position: 'top',
  text: 'No content',
  children: 'No content'
};

export default Tooltip;
