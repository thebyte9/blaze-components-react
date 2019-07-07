import React, { FunctionComponent, useState } from "react";
interface IAvatarProps {
  modifier?: string;
  url?: string;
  username?: string;
  attrs?: any;
}
const Avatar: FunctionComponent<IAvatarProps> = ({
  modifier,
  url,
  username,
  ...attr
}): JSX.Element => {
  const [avatarUrl, setAvatar] = useState<string | undefined>(url);
  const buildedModifier = modifier ? `avatar--${modifier}` : "";

  const initials =
    username &&
    username
      .split(" ")
      .map(subName => subName[0].toUpperCase())
      .join("")
      .substring(0, 2);

  if (url) {
    const imageData = new Image();
    imageData.src = url;
    imageData.addEventListener('load', () => setAvatar(url));
  }

  return (
    <div className={`avatar ${buildedModifier}`}>
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
