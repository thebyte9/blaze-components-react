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

  return (
    <span
      style={{ color: `${active ? "crimson" : "grey"}` }}
      onMouseDown={handelToggle}
    >
      {label}
    </span>
  );
};

export default StyleButton;
