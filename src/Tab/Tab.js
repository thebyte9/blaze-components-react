import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export const TabItem = ({
  action,
  children
}) => {
  action();
  return <div className="tabs__content current">{ children }</div>;
};

TabItem.propTypes = {
  action: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
  
TabItem.defaultProps = {
  action: () => {},
  children: 'No content'
};

export const Tab = ({
  selected,
  children
}) => {
  const [_selected, setSelected] = useState(selected);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {children.map(({ props: { title = 'Unnamed tab' } }, step) => (
          <Button
            className={`tabs__list-item ${step === _selected ? 'current' : ''}`}
            onClick={() => setSelected(step)}
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
