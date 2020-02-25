// @ts-nocheck
import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";

interface IRangeFilterProps {
  modifier?: string;
  name?: string;
  id?: string;
  onChange: ({
    event,
    value
  }: {
    event?: React.ChangeEvent<HTMLInputElement>;
    value: IRangeValue;
  }) => void;
  validationMessage: string | JSX.Element;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}

const MultiLevelMenu: FunctionComponent<IRangeFilterProps> = ({
  label,
  modifier,
  onChange,
  required,
  error,
  validationMessage,
  name,
  utils: { classNames, ErrorMessage },
  ...attrs
}): JSX.Element => {
  const [backAttributes, setBackAttributes] = useState<any>({
    backLink: "#",
    value: 1
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

  const navLinkModifier: string = classNames({
    "nav-link--hide": backAttributes.value === 1
  });

  return (
    <div className="multi_level_menu" ref={menuRef}>
      <div className="nav-title">
        <a
          href={backAttributes.backLink}
          className={`nav-link ${navLinkModifier}`}
          id="layer1"
          onClick={handleNavLinkClick}
          data-value={backAttributes.linkValue}
        >
          back
        </a>
        <div className="side-menu" id="layer1">
          <ul>
            <li>
              <a href="#" className="l1" data-value="2">
                Level 1 menu >
              </a>
            </li>
          </ul>
        </div>
        <div className="layer1 side-menu hide" id="layer2">
          <ul>
            <li>
              <a href="#" className="l1" data-value="3" id="l2">
                Level 2 menu >
              </a>
            </li>
            <li>
              <a href="#" className="l1" id="l2">
                Level 2 menu
              </a>
            </li>
          </ul>
        </div>
        <div className="layer2 side-menu hide" id="layer3">
          <ul>
            <li>
              <a href="#" className="">
                Level 3 menu >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

MultiLevelMenu.defaultProps = {
  error: false,
  label: "",
  modifier: "",
  name: "",
  validationMessage: "This field is required"
};

export default withUtils(MultiLevelMenu);
