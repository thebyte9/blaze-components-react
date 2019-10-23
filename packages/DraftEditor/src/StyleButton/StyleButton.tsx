import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, MouseEvent } from "react";
import { IStyleButtonProps } from "../interfaces";

const StyleButton: FunctionComponent<IStyleButtonProps> = ({
  onToggle,
  style,
  active,
  label,
  utils: { classNames }
}): JSX.Element => {
  const handelToggle = (event: MouseEvent): void => {
    event.preventDefault();
    onToggle(style);
  };

  const styleButtonClassName = classNames("custom-DraftEditor-styleButton", {
    "custom-DraftEditor-activeButton": active
  });

  return (
    <span className={styleButtonClassName} onMouseDown={handelToggle}>
      {label}
    </span>
  );
};

export default withUtils(StyleButton);
