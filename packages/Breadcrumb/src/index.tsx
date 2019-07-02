import utils from '@blaze-react/utils';
import React, { FunctionComponent } from "react";

interface IBreadcrumb {
  utils: {
    uniqueId: (element: any) => string
  };
  children: any
}

const Breadcrumb: FunctionComponent<IBreadcrumb> = ({
  utils: {
    uniqueId
  },
  children
}) => {

  const checkChildren = () => {
    if (Array.isArray(children)) {
      return children;
    }
    return [children]
  }

  const childs = checkChildren();

  return (
    <ul className="breadcrumb">
      {childs.length ? (
        childs.map(
          (child: any): JSX.Element => (
            <li key={uniqueId(child)} className="breadcrumb__item">
              {child}
            </li>
          )
        )
      ) : (
          <li className="breadcrumb__item">{childs}</li>
        )}
    </ul >
  )
};

Breadcrumb.defaultProps = {
  children: '<p>Missing breadcrumb content</p>'
};
export default utils(Breadcrumb);
