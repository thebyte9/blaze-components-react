
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  label,
  children
}) => {
  const [toggled, setToggled] = useState('close');

  const toggleMenu = () => {
    const menuStatus = toggled === 'close' ? 'open' : 'close';
    setToggled(menuStatus);
  };

  return (
    <Fragment>
      <div className="more-menu__wrapper">
        <button onClick={toggleMenu} type="button" className="icon-button toggle">
          {label}
          <i className="material-icons">more_vert</i>
        </button>
        <div className={`more-menu ${toggled}`}>
          <ul className="more-menu__list">
            {children.map(child => (<li className="more-menu__list-item">{child}</li>))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Dropdown.defaultProps = {
  label: 'Menu',
  children: []
};

export default Dropdown;
