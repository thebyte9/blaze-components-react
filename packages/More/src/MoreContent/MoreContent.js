import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MoreContent = ({ children, toggled, isHeader, isMoreMenu, isDropdown }) => {
  const ulClassName = classnames({
    dropdown__submenu: isDropdown,
    'dropdown__submenu dropdown__submenu--header': isHeader,
    'dropdown__submenu--displayed dropdown__list-item--displayed': toggled && isHeader,
    'more-menu more-menu__list': isMoreMenu,
    'more-menu--open': toggled && isMoreMenu
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
      {React.Children.map(
        children,
        child =>
          child && (
            <li key={child.symbol} className={liClassName}>
              {React.cloneElement(child, {
                className: `${child.props.className} ${childClassname}`
              })}
            </li>
          )
      )}
    </ul>
  );
};

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

export default MoreContent;
