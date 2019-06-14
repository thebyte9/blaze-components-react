
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const menuStyles = {
  width: '100%',
  top: '100%'
};

const ButtonSelect = ({
  text,
  children,
  ...Attr
}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="more-menu__wrapper">
      <Button onClick={() => setToggled(!toggled)} {...Attr}>
        <i className="material-icons">{`keyboard_arrow_${toggled ? 'up' : 'down'}`}</i>
        {text}
      </Button>
      
      {toggled && (
      <div className="more-menu open" style={menuStyles}>
          {children}
      </div>
      )}
    </div>
  );
};

ButtonSelect.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

ButtonSelect.defaultProps = {
  text: 'Actions',
  children: 'No content'
};

export default ButtonSelect;
