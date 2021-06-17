import React from "react";

interface IMultiLevelMenuListItemProps {
  children: string | JSX.Element | JSX.Element[];
  to?: number;
  handleClickMenu?: (to: number | undefined) => Record<string, unknown>;
}

const MultiLevelMenuListItem = ({
  children,
  to,
  handleClickMenu
}: IMultiLevelMenuListItemProps): JSX.Element => (
  <li>
    <span
      data-cy="multiLevelMenuList-item"
      onClick={() => handleClickMenu && handleClickMenu(to)}
    >
      {children}
    </span>
  </li>
);

export default MultiLevelMenuListItem;
