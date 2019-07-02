import React, { FunctionComponent } from "react";

const Breadcrumb: FunctionComponent<any> = ({ children }) => (
  <ul className="breadcrumb">
    {children.length ? (
      children.map(
        (child: any): JSX.Element => (
          <li key={Math.random()} className="breadcrumb__item">
            {child}
          </li>
        )
      )
    ) : (
        <li className="breadcrumb__item">{children}</li>
      )}
  </ul>
);
Breadcrumb.defaultProps = {
  children: "Missing breadcrumb content"
};
export default Breadcrumb;
