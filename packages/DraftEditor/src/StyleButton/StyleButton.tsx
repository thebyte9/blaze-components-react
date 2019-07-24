import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, MouseEvent } from "react";

interface IStyleButtonProps {
  onToggle: (style: string) => void;
  style: string;
  active: boolean;
  label: string;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
  };
}
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

  const styleButtonClassName = classNames({
    "custom-DraftEditor-activeButton": active,
    "custom-DraftEditor-styleButton": !active
  });

  const labelStatus: JSX.Element = active ? <b>{label}</b> : <>{label}</>;

  return (
    <span className={styleButtonClassName} onMouseDown={handelToggle}>
      {labelStatus}
    </span>
  );
};

export default withUtils(StyleButton);
