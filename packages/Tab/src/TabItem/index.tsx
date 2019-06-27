import React from 'react';
import PropTypes from 'prop-types';

interface TabItemProps {
  action: () => {},
  children?: any,
  title?: string
}

export const TabItem = ({ action, children }: TabItemProps) => {
  action();
  return <div className="tabs__content current">{children}</div>;
};

TabItem.propTypes = {
  action: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

TabItem.defaultProps = {
  action: () => { },
  children: 'No content'
};