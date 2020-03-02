import React from "react";

interface IChipLabelProps {
  children: string | JSX.Element | JSX.Element[];
  'data-cy'?: string;
}
const ChipLabel = ({ children, 'data-cy': dataCy }: IChipLabelProps): JSX.Element => (
  <div className="chip__label" data-cy={dataCy}>{children}</div>
);

export default ChipLabel;
