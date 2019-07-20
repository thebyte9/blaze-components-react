import React from "react";

interface IDrawerPageContentProps {
  children: JSX.Element | JSX.Element[];
}

const DrawerPageContent = ({
  children
}: IDrawerPageContentProps): JSX.Element => (
  <div className="page__content page__content--drawer">{children}</div>
);

export default DrawerPageContent;
