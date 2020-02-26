import React from "react";

interface IMultiLevelMenuListItemProps {
  children: JSX.Element | JSX.Element[];
  to: number;
}

const MultiLevelMenuListItem = ({
  children,
  to
}: IMultiLevelMenuListItemProps): JSX.Element => (
  <li>
    <a href="#" className="l1" data-value={to}>
      {children}
    </a>
  </li>
);

export default MultiLevelMenuListItem;
