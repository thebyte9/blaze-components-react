import React from 'react';

interface ITabItemProps {
  action: () => Record<string, unknown>;
  children?: unknown;
  title?: string;
  classes?: string;
  icon?: string;
  showLabel?: boolean;
}

export const TabItem = ({ action, classes = '', children }: ITabItemProps): JSX.Element => {
  action();
  return classes !== '' ? (
    <div className="tabs__content current">{children}</div>
  ) : (
    <div className={classes}>{children}</div>
  );
};

TabItem.defaultProps = {
  action: (): void => {
    return;
  },
  children: 'No content',
};
