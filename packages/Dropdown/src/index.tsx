import React, { useState, Fragment } from "react";
import uuidv1 from "uuid/v1";
type DropdownProps = {
  label?: string,
  children?: any
};
const Dropdown: React.SFC<DropdownProps> = ({ label, children }) => {
  const [toggled, setToggled] = useState("close");
  const toggleMenu = () => {
    const menuStatus = toggled === "close" ? "open" : "close";
    setToggled(menuStatus);
  };
  return (
    <Fragment>
      <div className="more-menu__wrapper">
        <button
          onClick={toggleMenu}
          type="button"
          className="icon-button toggle"
        >
          {label}
          <i className="material-icons">more_vert</i>
        </button>
        <div className={`more-menu ${toggled}`}>
          <ul className="more-menu__list">
            {children.map((child: any): JSX.Element => (
              <li key={uuidv1()} className="more-menu__list-item">
                {child}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
Dropdown.defaultProps = {
  label: "Menu",
  children: []
};
export default Dropdown;
