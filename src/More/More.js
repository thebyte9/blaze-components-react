import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';

const More = ({ children, isHeader, isMoreMenu }) => {
  const [toggled, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggled);

  const ulClassName = classnames('dropdown', {
    'dropdown__list dropdown__list--header dropdown--header': isHeader,
    'dropdown dropdown__list': !isHeader,
    'more-menu__list': isMoreMenu
  });

  const liClassName = classnames({
    'dropdown__list-item dropdown__list-item--header': isHeader,
    'dropdown__list-item': !isHeader,
    'more-menu__list-item': isMoreMenu
  });

  return (
    <div className="more-menu__wrapper">
      <ul className={ulClassName}>
        <li className={liClassName}>
          {React.Children.map(children, child => React.cloneElement(child, {
            toggled,
            handleToggle
          }))}
        </li>
      </ul>
    </div>
  );
};

More.propTypes = {
  isHeader: PropTypes.bool,
  isMoreMenu: PropTypes.bool,
  children: PropTypes.array.isRequired
};

More.defaultProps = {
  isHeader: false,
  isMoreMenu: false
};

const MoreAvatar = ({
  children, handleToggle, label, isHeader, className, isMoreMenu
}) => {
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
        <Fragment>
          {React.Children.map(children, child => React.cloneElement(child))}
        </Fragment>
      )}
    </Button>
  );
};
  
More.Avatar = MoreAvatar;

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

const MoreContent = ({
  children, toggled, isHeader, isMoreMenu, isDropdown
}) => {
  const ulClassName = classnames({
    dropdown__submenu: isDropdown,
    'dropdown__submenu dropdown__submenu--header': isHeader,
    'dropdown__submenu--displayed dropdown__list-item--displayed': toggled && isHeader,
    'more-menu more-menu__list': isMoreMenu,
    open: toggled && isMoreMenu
  });
  
  const liClassName = classnames({
    'dropdown__list-item dropdown__list-item--submenu': isDropdown,
    'dropdown__list-item--header': isHeader,
    'more-menu__list-item': isMoreMenu
  });
  
  const childClassname = classnames({
    'dropdown__list-item-link--header': isHeader
  });
  
  return (
    <ul className={ulClassName}>
      {React.Children.map(children, child => (
        <li key={child.symbol} className={liClassName}>
          {React.cloneElement(child, {
            className: `${child.props.className} ${childClassname}`
          })}
        </li>
      ))}
    </ul>
  );
};
  
More.Content = MoreContent;

MoreContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  toggled: PropTypes.bool,
  isHeader: PropTypes.bool,
  isMoreMenu: PropTypes.bool,
  isDropdown: PropTypes.bool
};
  
MoreContent.defaultProps = {
  toggled: false,
  isHeader: false,
  isMoreMenu: false,
  isDropdown: false
};

export default More;
