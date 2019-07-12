import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useState } from "react";
interface IAvatarProps {
  modifier?: string;
  url?: string;
  username?: string;
  utils: {
    classNames: (...args: any) => string;
  };
  attrs?: any;
}
const Avatar: FunctionComponent<IAvatarProps> = ({
  modifier,
  url,
  username,
  utils: { classNames },
  ...attr
}): JSX.Element => {
  const [avatarUrl, setAvatar] = useState<string | undefined>(url);
  const [validUrl, setValidUrl] = useState<boolean>(false);

  const avatarClassName: string = classNames("avatar", {
    [`avatar--${modifier}`]: !!modifier
  });

  const initials = !username
    ? "!"
    : username
        .split(" ")
        .map(subName => subName[0].toUpperCase())
        .join("")
        .substring(0, 2);

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
    <div className={avatarClassName}>
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
export default withUtils(Avatar);
