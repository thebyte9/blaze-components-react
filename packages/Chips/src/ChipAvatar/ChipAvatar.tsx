import React from "react";

interface IChipAvatarProps {
  children: JSX.Element | JSX.Element[];
  'data-testid'?: string;
}
const ChipAvatar = ({ children, 'data-testid': testId }: IChipAvatarProps): JSX.Element => (
  <div className="chip__avatar" data-testid={testId}>{children}</div>
);

export default ChipAvatar;
