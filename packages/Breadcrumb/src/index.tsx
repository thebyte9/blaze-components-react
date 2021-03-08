import React, { FunctionComponent } from "react";

const Breadcrumb: FunctionComponent<any> = ({ children }) => (
  <ul className="breadcrumb" data-testid="breadcrumb">
    {React.Children.map(
      children,
      (child: any): JSX.Element =>
        <li key={child.symbol} className="breadcrumb__item">{child}</li>
    )}
  </ul >
);

Breadcrumb.defaultProps = {
  children: "Missing breadcrumb content"
};
export default Breadcrumb;
