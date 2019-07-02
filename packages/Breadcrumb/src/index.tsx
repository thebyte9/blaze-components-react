import React, { FunctionComponent } from "react";

interface IBreadcrumb {
  children: any
}

const Breadcrumb: FunctionComponent<IBreadcrumb> = ({
  children
}) => {

  return (
    <ul className="breadcrumb">
      {React.Children.map(
        children,
        (child: any): JSX.Element =>
          child && (<li key={child.symbol} className="breadcrumb__item">{child}</li>)
      )}
    </ul >
  )
};

Breadcrumb.defaultProps = {
  children: 'Missing breadcrumb content'
};
export default Breadcrumb;
