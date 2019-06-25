import React, { useState, FunctionComponent } from "react";
type AvatarProps = {
  modifier?: string,
  url?: string,
  username?: string,
  attrs?: any
};
const Avatar: FunctionComponent<AvatarProps> = ({
  modifier,
  url = "",
  username,
  ...attr
}): JSX.Element => {
  const [avatarUrl, setAvatar] = useState(url);
  const _modifier = modifier ? `avatar--${modifier}` : "";
  const initials =
    username &&
    username
      .split(" ")
      .map(subName => subName[0].toUpperCase())
      .join("")
      .substring(0, 2);
  const imageData = new Image();
  imageData.src = url;
  imageData.onload = () => setAvatar(url);
  return (
    <div className={`avatar ${_modifier}`}>
      {avatarUrl && <img src={avatarUrl} alt="avatar" {...attr} />}
      {!avatarUrl && <span>{initials}</span>}
    </div>
  );
};
Avatar.defaultProps = {
  modifier: "",
  url: "",
  username: "!"
};
export default Avatar;
