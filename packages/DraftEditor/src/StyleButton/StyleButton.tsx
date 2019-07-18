import React, { FunctionComponent, MouseEvent } from "react";

interface IStyleButtonProps {
  onToggle: (style: string) => void;
  style: string;
  active: boolean;
  label: string;
}
const StyleButton: FunctionComponent<IStyleButtonProps> = ({
  onToggle,
  style,
  active,
  label
}): JSX.Element => {
  const handelToggle = (event: MouseEvent): void => {
    event.preventDefault();
    onToggle(style);
  };

  const labelStatus: JSX.Element = active ? <b>{label}</b> : <>{label}</>;

  return <span onMouseDown={handelToggle}>{labelStatus}</span>;
};

export default StyleButton;
