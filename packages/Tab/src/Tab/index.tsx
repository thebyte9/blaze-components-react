import { ButtonView } from '@blaze-react/button';
import React, { useEffect, useState } from 'react';
import { CustomIcon } from '@blaze-react/icon';
import { TabItem } from '../TabItem';

type selectedType = string | number;

interface ITabProps {
  selected: selectedType;
  children?: any;
  classes?: string;
}

export const Tab = ({ selected = 0, classes = '', children = 'No content' }: ITabProps): JSX.Element => {
  const [selectedValue, setSelected] = useState(selected);


  useEffect(() => {
    if (selectedValue !== selected) setSelected(selected)
  }, [selected])

  const DeprecatedTabs = () => {
    console.warn(
      'Usage of CSS classes will be deprecated in the near future. You should use Tailwind classes classes instead',
    );

    return (
      <div className="tabs">
        <div className="tabs__list">
          {children.map((child: any, step: number) => {
            if (!React.isValidElement(child) || child.type !== TabItem) {
              return null;
            }

            const { props: { title = 'Unnamed tab' } = {} }: any = child;
            return (
              <ButtonView
                className={`tabs__list-item ${step === selectedValue ? 'current' : ''}`}
                onClick={() => setSelected(step)}
                key={title}
              >
                {title}
              </ButtonView>
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
        {children.map((child: any, step: number) => {
          if (!React.isValidElement(child) || child.type !== TabItem) {
            console.warn('Tab component only accepts children of type TabItem.')
            return null;
          }

          const { props: { title = 'Unnamed tab', icon, showLabel } }: any = child;

          const override = classes.concat(
            `group mr-2 ${step === selectedValue ? ' bg-tab-hover text-tab-inverted' : ''}`,
          );

          return (
            <ButtonView classes={override} onClick={() => setSelected(step)} key={title}>
              <div className="flex items-center justify-center">
                {!icon ? (
                  title
                ) : (
                  <CustomIcon
                    classes={`
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
            </ButtonView>
          );
        })}
      </div>
      <div className="mt-1">{children[selectedValue]}</div>
    </>
  );

  return classes !== '' ? BlazeTabs : DeprecatedTabs();
};