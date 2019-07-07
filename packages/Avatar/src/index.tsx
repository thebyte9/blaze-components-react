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
  const [invalidUrl, setInvalidUrl] = useState<boolean>(true);
  const buildedModifier = modifier ? `avatar--${modifier}` : "";


  const getInitilas = (): string => {
    if (!username) {
      return '!';
    }
    return username
      .split(" ")
      .map(subName => subName[0].toUpperCase())
      .join("")
      .substring(0, 2);
  }

  const initials: string = getInitilas();

  if (url && invalidUrl) {
    const imageData = new Image();
    imageData.src = url;

    imageData.addEventListener('load', (): void => {
      setAvatar(url)
      setInvalidUrl(false);
    });
  }

  return (
    <div className={`avatar ${buildedModifier}`}>
      {avatarUrl ? (
        <img src={avatarUrl} alt="avatar" {...attr} />
      ) : (
          <span>{initials}</span>
        )}
    </div>
  );
};

Avatar.defaultProps = {
  modifier: "",
  url: "",
  username: ""
};
export default Avatar;
