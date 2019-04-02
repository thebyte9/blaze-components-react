import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const TabItem = ({
  children
}) => (<div className="tabs__content">{ children }</div>);

TabItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
  
TabItem.defaultProps = {
  children: 'No content'
};

const Tab = ({
  selected,
  children
}) => {
  const [_selected, setSelected] = useState(selected);

  const handleChange = ({ i, action = () => {} }) => {
    setSelected(i);
    action();
  };

  return (
    <div className="tabs">
      <div className="tabs__list">
        {children.map(({ props: { title, action } }, i) => (
          <Button
            className={`tabs__list-item ${i === _selected ? 'current' : ''}`}
            onClick={() => handleChange({ i, action })}
            key={title}>
            {title}
          </Button>
        ))}
      </div>
      {children[_selected]}
    </div>
  );
};

Tab.propTypes = {
  selected: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Tab.defaultProps = {
  selected: 0,
  children: 'No content'
};

export {
  Tab,
  TabItem,
};
