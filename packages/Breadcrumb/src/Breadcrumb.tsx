import React, { FunctionComponent } from 'react';

interface IBreadcrumbProps {
  children?: JSX.Element | JSX.Element[] | string;
}

const Breadcrumb: FunctionComponent<IBreadcrumbProps> = ({ children }) => (
  <ul className="breadcrumb">
    {React.Children.map(
      children,
      (child): React.ReactElement => (
        <li className="breadcrumb__item">{child}</li>
      ),
    )}
  </ul>
);

Breadcrumb.defaultProps = {
  children: 'Missing breadcrumb content',
};

export default Breadcrumb;
