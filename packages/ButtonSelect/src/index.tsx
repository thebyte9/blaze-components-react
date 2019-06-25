import React, { useState, FunctionComponent } from "react";
import Button from "@blaze-react/button";
const menuStyles = {
  width: "100%",
  top: "100%"
};
type ButtonSelectProps = {
  text?: string,
  children?: any,
  Attr?: any
};
const ButtonSelect: FunctionComponent<ButtonSelectProps> = ({
  text,
  children,
  ...Attr
}) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="more-menu__wrapper">
      <Button onClick={(): void => setToggled(!toggled)} {...Attr}>
        <i className="material-icons">{`keyboard_arrow_${
          toggled ? "up" : "down"
          }`}</i>
        {text}
      </Button>

      {toggled && (
        <div className="more-menu open" style={menuStyles}>
          {children}
        </div>
      )}
    </div>
  );
};
ButtonSelect.defaultProps = {
  text: "Actions",
  children: "No content"
};
export default ButtonSelect;
