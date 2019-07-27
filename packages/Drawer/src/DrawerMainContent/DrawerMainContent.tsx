import React from "react";

interface IDrawerMainContentProps {
  children: JSX.Element | JSX.Element[];
}

const DrawerMainContent = ({
  children
}: IDrawerMainContentProps): JSX.Element => (
  <div className="drawer__content">{children}</div>
);

export default DrawerMainContent;
