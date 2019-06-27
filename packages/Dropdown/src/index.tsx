import React, { useState, Fragment } from "react";
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
            <li className="more-menu__list-item">
              {React.Children.map(children, (child: any): JSX.Element => React.cloneElement(child))}
            </li>
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
