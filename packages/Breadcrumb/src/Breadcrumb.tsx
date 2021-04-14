import React, { FunctionComponent } from "react";

const Breadcrumb: FunctionComponent<any> = ({ children }) => (
  <ul className="breadcrumb">
    {React.Children.map(
      children,
      (child): React.ReactElement =>
        <li key={child.symbol} className="breadcrumb__item">{child}</li>
    )}
  </ul >
);

Breadcrumb.defaultProps = {
  children: "Missing breadcrumb content"
};

export default Breadcrumb;
