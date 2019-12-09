import classnames from "classnames";
import React, { useRef } from "react";
import { createPortal } from "react-dom";
interface IMoreContentProps {
  toggled?: boolean;
  isHeader?: boolean;
  isMoreMenu?: boolean;
  isDropdown?: boolean;
  handleToggle?: any;
  displayBg?: boolean;
}
const MoreContent: React.SFC<IMoreContentProps> = ({
  children,
  toggled,
  isHeader,
  isMoreMenu,
  isDropdown,
  handleToggle,
  displayBg
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (event.target === wrapperRef.current) {
      handleToggle(event);
    }
  };

  const getContainer = () => {
    const id = "moreBackground";
    let containerElementRef = document.getElementById(id);
    if (!containerElementRef) {
      containerElementRef = document.createElement("div");
      containerElementRef.id = id;
      document.body.appendChild(containerElementRef);
    }
    return containerElementRef;
  };

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
    "dropdown__list-item-link--header": isHeader,
    "more-menu__link": isMoreMenu
  });

  return (
    <>
      {toggled &&
        displayBg &&
        createPortal(
          <div
            className="more-menu__background"
            ref={wrapperRef}
            onClick={handleClickOutside}
          />,
          getContainer()
        )}
      <ul className={ulClassName}>
        {React.Children.map(
          children,
          (child: any) =>
            child && (
              <li key={child.symbol} className={liClassName}>
                {React.cloneElement(child, {
                  className: `${
                    child.props.className ? child.props.className : ""
                  } ${childClassname}`
                })}
              </li>
            )
        )}
      </ul>
    </>
  );
};
MoreContent.defaultProps = {
  displayBg: false,
  isDropdown: false,
  isHeader: false,
  isMoreMenu: false,
  toggled: false
};
export default MoreContent;
