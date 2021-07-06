import React from 'react';

interface ITabItemProps {
  action: () => Record<string, unknown>;
  children?: unknown;
  title?: string;
  utilities?: string;
}

export const TabItem = ({ action, utilities = '', children }: ITabItemProps): JSX.Element => {
  action();
  return utilities !== '' ? (
    <div className="tabs__content current">{children}</div>
  ) : (
    <div className={utilities}>{children}</div>
  );
};

TabItem.defaultProps = {
  action: (): void => {
    return;
  },
  children: 'No content',
};
