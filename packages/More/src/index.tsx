import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import MoreAvatar from "./MoreAvatar";
import MoreContent from "./MoreContent";
interface IMoreProps {
  isHeader?: boolean;
  isMoreMenu?: boolean;
  displayBg?: boolean;
  children?: any;
  onClose: () => void;
}

const More = ({
  children,
  isHeader,
  isMoreMenu,
  displayBg,
  onClose
}: IMoreProps) => {
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [toggled, setToggle] = useState<boolean>(false);
  const handleToggle = (event: any) => {
    event.stopPropagation();
    setToggle(!toggled);
    if (toggled) {
      onClose();
    }
  };

  const ulClassName = classnames("dropdown", {
    "dropdown dropdown__list": !isHeader,
    "dropdown__list dropdown__list--header dropdown--header": isHeader,
    "more-menu__list": isMoreMenu
  });
  const liClassName = classnames({
    "dropdown__list-item": !isHeader,
    "dropdown__list-item dropdown__list-item--header": isHeader,
    "more-menu__list-item": isMoreMenu
  });

  useEffect(() => {
    document.addEventListener("mousedown", (event): any =>
      handleOutsideClick(event)
    );

    return function cleanup() {
      document.removeEventListener("mousedown", (event): any =>
        handleOutsideClick(event)
      );
    };
  }, []);

  const handleOutsideClick = (event: any) => {
    if (
      moreMenuRef.current !== null &&
      !moreMenuRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };

  return (
    <>
      <div className="more-menu__wrapper" ref={moreMenuRef}>
        <ul className={ulClassName}>
          <li className={liClassName}>
            {React.Children.map(children, (child: any) =>
              React.cloneElement(child, {
                handleToggle,
                toggled,
                displayBg
              })
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
More.defaultProps = {
  isHeader: false,
  isMoreMenu: false,
  displayBg: false,
  onClose: () => void 0
};
More.Avatar = MoreAvatar;
More.Content = MoreContent;
export default More;
