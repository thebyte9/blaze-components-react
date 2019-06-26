import React from "react";
import classnames from "classnames";
type MoreContentProps = {
  toggled?: boolean,
  isHeader?: boolean,
  isMoreMenu?: boolean,
  isDropdown?: boolean
};
const MoreContent: React.SFC<MoreContentProps> = ({
  children,
  toggled,
  isHeader,
  isMoreMenu,
  isDropdown
}) => {
  const ulClassName = classnames({
    dropdown__submenu: isDropdown,
    "dropdown__submenu dropdown__submenu--header": isHeader,
    "dropdown__submenu--displayed dropdown__list-item--displayed":
      toggled && isHeader,
    "more-menu more-menu__list": isMoreMenu,
    "more-menu--open": toggled && isMoreMenu
  });
  const liClassName = classnames({
    "dropdown__list-item dropdown__list-item--submenu": isDropdown,
    "dropdown__list-item--header": isHeader,
    "more-menu__list-item": isMoreMenu
  });
  const childClassname = classnames({
    "dropdown__list-item-link--header": isHeader
  });
  return (
    <ul className={ulClassName}>
      {React.Children.map(
        children,
        (child: any) =>
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
MoreContent.defaultProps = {
  toggled: false,
  isHeader: false,
  isMoreMenu: false,
  isDropdown: false
};
export default MoreContent;
