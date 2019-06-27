import classnames from "classnames";
import React, { useState } from "react";
import MoreAvatar from "./MoreAvatar";
import MoreContent from "./MoreContent";
interface IMoreProps {
  isHeader?: boolean;
  isMoreMenu?: boolean;
  children?: any;
}

const More = ({ children, isHeader, isMoreMenu }: IMoreProps) => {
  const [toggled, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggled);
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
  return (
    <div className="more-menu__wrapper">
      <ul className={ulClassName}>
        <li className={liClassName}>
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              handleToggle,
              toggled
            })
          )}
        </li>
      </ul>
    </div>
  );
};
More.defaultProps = {
  isHeader: false,
  isMoreMenu: false
};
More.Avatar = MoreAvatar;
More.Content = MoreContent;
export default More;
