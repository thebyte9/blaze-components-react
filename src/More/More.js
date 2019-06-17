import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MoreAvatar from './MoreAvatar';
import MoreContent from './MoreContent';

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

More.Avatar = MoreAvatar;
  
More.Content = MoreContent;

export default More;
