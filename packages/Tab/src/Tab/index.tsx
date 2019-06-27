import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@blaze-react/button';

type selectedType = string | number;

interface TabProps {
  selected: selectedType,
  children?: any
}

export const Tab = ({ selected, children }: TabProps) => {
  const [_selected, setSelected] = useState(selected);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {children.map(({ props: { title = 'Unnamed tab' } }: any, step: any) => (
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
