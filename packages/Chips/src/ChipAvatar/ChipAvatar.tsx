import React from "react";

interface IChipAvatarProps {
  children: JSX.Element | JSX.Element[];
}
const ChipAvatar = ({ children }: IChipAvatarProps): JSX.Element => (
  <div className="chip__avatar">{children}</div>
);

export default ChipAvatar;
