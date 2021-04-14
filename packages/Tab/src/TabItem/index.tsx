import PropTypes from "prop-types";
import React from "react";

interface ITabItemProps {
  action: () => Record<string, unknown>;
  children?: any;
  title?: string;
}

export const TabItem = ({ action, children }: ITabItemProps) => {
  action();
  return <div className="tabs__content current">{children}</div>;
};

TabItem.propTypes = {
  action: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

TabItem.defaultProps = {
  action: (): void => {
    return;
  },
  children: "No content"
};
