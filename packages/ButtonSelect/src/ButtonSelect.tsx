import Button from "../../Button/src";
import React, { FunctionComponent, useState } from "react";

const menuStyles = {
  top: "100%",
  width: "100%"
};

interface IButtonSelectProps {
  text?: string;
  children?: any;
  Attr?: any;
}

const ButtonSelect: FunctionComponent<IButtonSelectProps> = ({
  text,
  children,
  ...Attr
}) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="more-menu__wrapper">
      <Button
        modifiers={["full-width"]}
        onClick={(): void => setToggled(!toggled)}
        {...Attr}
      >
        <>
        <i className="material-icons">{`keyboard_arrow_${
          toggled ? "up" : "down"
        }`}</i>
        {text}
        </>
      </Button>

      {toggled && (
        <div className="more-menu--open" style={menuStyles}>
          {children}
        </div>
      )}
    </div>
  );
};

ButtonSelect.defaultProps = {
  children: "No content",
  text: "Actions"
};

export default ButtonSelect;
