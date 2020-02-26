import React from "react";

interface IMultiLevelMenuListProps {
  children: JSX.Element | JSX.Element[];
  id: number;
  active?: boolean;
}

const MultiLevelMenuList = ({
  children,
  id,
  active
}: IMultiLevelMenuListProps): JSX.Element => {
  const menuStatus: string = !active ? "hide" : "";
  return (
    <div className={`side-menu ${menuStatus}`} id={`layer${id}`}>
      <ul>{children}</ul>
    </div>
  );
};

export default MultiLevelMenuList;
