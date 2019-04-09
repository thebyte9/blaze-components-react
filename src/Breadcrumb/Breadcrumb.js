import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({
  children
}) => (
  <ul className="breadcrumb">
    {children.length
      ? children.map(child => <li key={Math.random()} className="breadcrumb__item">{child}</li>)
      : <li className="breadcrumb__item">{children}</li>
    }
  </ul>
);

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Breadcrumb.defaultProps = {
  children: 'No content'
};

export default Breadcrumb;
