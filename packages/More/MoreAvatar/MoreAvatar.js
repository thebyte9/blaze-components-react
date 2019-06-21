import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@blaze-react/button';

const MoreAvatar = ({ children, handleToggle, label, isHeader, className, isMoreMenu }) => {
  const buttonClassName = classnames({
    dropdown__button: isHeader,
    'icon-button icon-button--round': isMoreMenu,
    [className]: Boolean(className)
  });
  return (
    <Button onClick={handleToggle} className={buttonClassName}>
      {isHeader ? (
        <Fragment>
          <span className="dropdown__name">{label}</span>
          {children}
        </Fragment>
      ) : (
        <Fragment>{React.Children.map(children, child => React.cloneElement(child))}</Fragment>
      )}
    </Button>
  );
};

MoreAvatar.propTypes = {
  children: PropTypes.object,
  handleToggle: PropTypes.func,
  label: PropTypes.string,
  isHeader: PropTypes.bool,
  isMoreMenu: PropTypes.bool,
  className: PropTypes.string
};

MoreAvatar.defaultProps = {
  children: null,
  handleToggle: () => {},
  label: '',
  className: '',
  isHeader: false,
  isMoreMenu: false
};

export default MoreAvatar;
