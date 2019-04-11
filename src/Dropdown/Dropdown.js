
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

export const DropdownItem = ({
  label,
  action
}) => (
  <li>
    <span onClick={action} role="button">{label}</span>
  </li>
);

DropdownItem.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func
};
  
DropdownItem.defaultProps = {
  label: 'Empty label',
  action: () => {},
};

export const Dropdown = ({
  label,
  children
}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <Fragment>
      <div onClick={() => setToggled(!toggled)} role="button">{label}</div>
      <ul>{toggled && children}</ul>
    </Fragment>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Dropdown.defaultProps = {
  label: 'No content',
  children: <li>No content</li>
};
