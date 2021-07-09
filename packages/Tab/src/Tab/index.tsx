import Button from '@blaze-react/button';
import React, { useState } from 'react';
import CustomIcon from '@blaze-react/icon';

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
          {children.map(({ props: { title = 'Unnamed tab' } }: any, step: any) => {
            return (
              <Button
                className={`tabs__list-item ${step === selectedValue ? 'current' : ''}`}
                onClick={() => setSelected(step)}
                key={title}
              >
                {title}
              </Button>
            );
          })}
        </div>
        {children[selectedValue]}
      </div>
    );
  };

  const BlazeTabs = (
    <>
      <div className="flex overflow-x-auto scrollbar-hide">
        {children.map(({ props: { title = 'Unnamed tab', icon, showLabel } }: any, step: any) => {
          const override = utilities.concat(
            `group mr-2 ${step === selectedValue ? ' bg-tab-hover text-tab-inverted' : ''}`,
          );
          return (
            <Button utilities={override} onClick={() => setSelected(step)} key={title}>
              <div className="flex items-center justify-center">
                {!icon ? (
                  title
                ) : (
                  <CustomIcon
                    utilities={`
                      w-6 h-6 
                      stroke-current 
                      fill-current 
                      stroke-current 
                      stroke-0
                      ${step === selectedValue ? 'text-white' : 'text-gray-400'} 
                      group-hover:text-white 
                    `}
                    content={icon}
                  />
                )}
              </div>
              {icon && showLabel && <span className="mt-1 text-sm">{title}</span>}
            </Button>
          );
        })}
      </div>
      <div className="mt-1">{children[selectedValue]}</div>
    </>
  );

  return utilities !== '' ? BlazeTabs : DeprecatedTabs();
};
