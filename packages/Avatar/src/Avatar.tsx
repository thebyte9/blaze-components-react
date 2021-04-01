import buildClassNames from '../../Utils/src/buildClassNames';
import React, { useState } from "react";

type Tmodfier = "med" | "small" | "x-small";

interface IAvatarProps {
  modifier?: Tmodfier;
  url?: string;
  username?: string;
  attr?: Record<string, unknown>;
}

const Avatar =
  ({
    modifier,
    url,
    username,
    ...attr
  }: IAvatarProps): JSX.Element => {
    const [avatarUrl, setAvatar] = useState<string | undefined>(url);
    const [validUrl, setValidUrl] = useState<boolean>(false);

    const avatarClassName: string = buildClassNames("avatar", {
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
  ;

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
