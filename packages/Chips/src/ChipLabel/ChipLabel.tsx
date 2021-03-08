import React from "react";

interface IChipLabelProps {
  children: string | JSX.Element | JSX.Element[];
  'data-testid'?: string;
}
const ChipLabel = ({ children, 'data-testid': dataCy }: IChipLabelProps): JSX.Element => (
  <div className="chip__label" data-testid={dataCy}>{children}</div>
);

export default ChipLabel;
