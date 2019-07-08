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
  const [validUrl, setValidUrl] = useState<boolean>(false);

  const buildedModifier: string = modifier ? `avatar--${modifier}` : "";

  const getInitilas = (): string => {
    if (!username) {
      return "!";
    }
    return username
      .split(" ")
      .map(subName => subName[0].toUpperCase())
      .join("")
      .substring(0, 2);
  };

  const initials: string = getInitilas();

  if (url && !validUrl) {
    const imageData = new Image();
    imageData.src = url;

    imageData.addEventListener(
      "load",
      (): void => {
        setAvatar(url);
        setValidUrl(true);
      }
    );
  }

  return (
    <div className={`avatar ${buildedModifier}`}>
      {validUrl ? (
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
