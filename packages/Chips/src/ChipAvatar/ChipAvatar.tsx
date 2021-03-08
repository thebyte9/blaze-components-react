import React from "react";

interface IChipAvatarProps {
  children: JSX.Element | JSX.Element[];
  'data-testid'?: string;
}
const ChipAvatar = ({ children, 'data-testid': dataCy }: IChipAvatarProps): JSX.Element => (
  <div className="chip__avatar" data-testid={dataCy}>{children}</div>
);

export default ChipAvatar;
