import Button from '@blaze-react/button';
import React, { useState } from 'react';

type selectedType = string | number;

interface ITabProps {
  selected: selectedType;
  children?: any;
  utilities?: string;
}

export const Tab = ({ selected = 0, utilities = '', children = 'No content' }: ITabProps): JSX.Element => {
  const [selectedValue, setSelected] = useState(selected);

  const DeprecatedTabs = () => {
    console.warn(
      'Usage of CSS classes will be deprecated in the near future. You should use Tailwind utilities classes instead',
    );

    return (
      <div className="tabs">
        <div className="tabs__list">
          {children.map(({ props: { title = 'Unnamed tab' } }: any, step: any) => (
            <Button
              className={`tabs__list-item ${step === selectedValue ? 'current' : ''}`}
              onClick={() => setSelected(step)}
              key={title}
            >
              {title}
            </Button>
          ))}
        </div>
        {children[selectedValue]}
      </div>
    );
  };

  const BlazeTabs = (
    <div className="flex items-center justify-center overflow-x-auto">
      {children.map(({ props: { title = 'Unnamed tab' } }: any, step: any) => (
        <Button utilities={utilities} onClick={() => setSelected(step)} key={title}>
          {title}
        </Button>
      ))}
    </div>
  );

  return utilities !== '' ? BlazeTabs : DeprecatedTabs();
};
