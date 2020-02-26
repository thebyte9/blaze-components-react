// @ts-nocheck
import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import MultiLevelMenuList from "./MultiLevelMenuList";
import MultiLevelMenuListItem from "./MultiLevelMenuListItem";

interface IMultiLevelMenuProps {
  selected: number;
  children: JSX.Element | [JSX.Element];
}

const MultiLevelMenu: FunctionComponent<IMultiLevelMenuProps> = ({
  label,
  modifier,
  onChange,
  required,
  error,
  validationMessage,
  name,
  selected,
  children,
  ...attrs
}): JSX.Element => {
  const [backAttributes, setBackAttributes] = useState<any>({
    backLink: "#",
    value: selected
  });

  const menuRef = useRef(null);

  const handleClickMenu = (event: any) => {
    const value = event.target.getAttribute("data-value");

    if (!value) {
      return;
    }

    const backLink = `#layer${value}`;

    setBackAttributes({ value, backLink });

    const backLinkElement = menuRef.current.querySelector(backLink);

    if (!backLinkElement) {
      return;
    }

    backLinkElement.classList.remove("hide-menu");
    backLinkElement.classList.toggle("show-menu");
  };

  const handleNavLinkClick = () => {
    const { backLink, value } = backAttributes;

    const currenActiveMenu = menuRef.current.querySelector(backLink);

    currenActiveMenu.classList.remove("show-menu");

    const newBackLink = `#layer${value - 1}`;
    const newValue = value - 1;

    setBackAttributes({ value: newValue, backLink: newBackLink });
  };

  useEffect(() => {
    const sideMenus = Array.from(menuRef.current.querySelectorAll(".l1"));

    sideMenus.forEach(item => item.addEventListener("click", handleClickMenu));
  }, []);

  const navLinkModifier: string =
    backAttributes.value === 1 ? "nav-link--hide" : "";

  return (
    <div className="multi_level_menu" ref={menuRef} {...attrs}>
      <div className="nav-title">
        <a
          href={backAttributes.backLink}
          className={`nav-link ${navLinkModifier}`}
          id={`layer${selected}`}
          onClick={handleNavLinkClick}
          data-value={backAttributes.linkValue}
        >
          back
        </a>

        {children}
      </div>
    </div>
  );
};

MultiLevelMenu.List = MultiLevelMenuList;
MultiLevelMenu.Item = MultiLevelMenuListItem;

export default MultiLevelMenu;
