import { buildClassNames } from "@blaze-react/utils";
import React, { useEffect, useRef, useState } from "react";
import MoreAvatar from "./MoreAvatar";
import MoreContent from "./MoreContent";
interface IMoreProps {
  isHeader?: boolean;
  isMoreMenu?: boolean;
  displayBg?: boolean;
  children?: any;
  onClose: () => void;
  disabled?: boolean;
}

const More = ({
  children,
  isHeader,
  isMoreMenu,
  displayBg,
  disabled,
  onClose,
}: IMoreProps) => {
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [toggled, setToggle] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", (event): any => {
      return handleOutsideClick(event);
    });

    return function cleanup() {
      document.removeEventListener("mousedown", (event): any => {
        return handleOutsideClick(event);
      });
    };
  }, []);

  const handleToggle = (event: any) => {
    if (disabled) { return; }
    event.stopPropagation();
    setToggle(!toggled);
    if (toggled) {
      onClose();
    }
  };

  const ulClassName = buildClassNames("dropdown", {
    "dropdown dropdown__list": !isHeader,
    "dropdown__list dropdown__list--header dropdown--header": isHeader,
    "more-menu__list": isMoreMenu,
  });
  const liClassName = buildClassNames({
    "dropdown__list-item": !isHeader,
    "dropdown__list-item dropdown__list-item--header": isHeader,
    "more-menu__list-item": isMoreMenu,
  });

  const handleOutsideClick = (event: any) => {
    if (
      moreMenuRef.current !== null &&
      !moreMenuRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };

  return (
    <div className="more-menu__wrapper" ref={moreMenuRef}>
      <ul className={ulClassName}>
        <li className={liClassName}>
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              handleToggle,
              toggled,
              displayBg,
              disabled,
            })
          )}
        </li>
      </ul>
    </div>
  );
};
More.defaultProps = {
  isHeader: false,
  isMoreMenu: false,
  displayBg: false,
  onClose: () => void 0,
  disabled: false,
};
More.Avatar = MoreAvatar;
More.Content = MoreContent;

export default More;
