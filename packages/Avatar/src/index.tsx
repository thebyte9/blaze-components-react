import withUtils from "@blaze-react/utils";
import React, { useState } from "react";
interface IAvatarProps {
  modifier?: string;
  url?: string;
  username?: string;
  utils: {
    classNames: (...args: any) => string;
  };
  attrs?: any;
}
const Avatar = withUtils(
  ({
    modifier,
    url,
    username,
    utils: { classNames },
    ...attr
  }: IAvatarProps): JSX.Element => {
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
  }
);

const availableModifiers = {
  med: "med",
  small: "small",
  xSmall: "x-small"
};

Avatar.availableModifiers = availableModifiers;

Avatar.defaultProps = {
  modifier: "",
  url: "",
  username: ""
};
export default Avatar;
