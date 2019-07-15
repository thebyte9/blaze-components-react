import React from "react";

interface IChipLabelProps {
  children: string | JSX.Element | JSX.Element[];
}
const ChipLabel = ({ children }: IChipLabelProps): JSX.Element => (
  <div className="chip__label">{children}</div>
);

export default ChipLabel;
