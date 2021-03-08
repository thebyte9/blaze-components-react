import React from "react";

interface IChipLabelProps {
  children: string | JSX.Element | JSX.Element[];
  'data-testid'?: string;
}
const ChipLabel = ({ children, 'data-testid': testId }: IChipLabelProps): JSX.Element => (
  <div className="chip__label" data-testid={testId}>{children}</div>
);

export default ChipLabel;
