// @ts-nocheck

import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, MouseEvent } from "react";
import { IStyleButtonProps } from "../../../interfaces";

const StyleButton: FunctionComponent<IStyleButtonProps> = ({
  onToggle,
  style,
  active,
  label,
  utils: { classNames },
  "data-cy": datacy,
}): JSX.Element => {
  const handelToggle = (event: MouseEvent): void => {
    event.preventDefault();
    if (onToggle) {
      onToggle(style);
    }
  };

  const styleButtonClassName = classNames("custom-DraftEditor-styleButton", {
    "custom-DraftEditor-activeButton": active,
  });

  return (
    <span
      className={styleButtonClassName}
      onMouseDown={handelToggle}
      data-cy={datacy || `styleButton-${label}`}
    >
      {label}
    </span>
  );
};

export default withUtils(StyleButton);
