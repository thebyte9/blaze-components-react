import React from "react";

interface IChipAvatarProps {
  children: JSX.Element | JSX.Element[];
  'data-cy'?: string;
}
const ChipAvatar = ({ children, 'data-cy': dataCy }: IChipAvatarProps): JSX.Element => (
  <div className="chip__avatar" data-cy={dataCy}>{children}</div>
);

export default ChipAvatar;
