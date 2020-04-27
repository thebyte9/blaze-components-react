import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { ILinkProps } from "../../../interfaces";

const Anchor: FunctionComponent<ILinkProps> = ({
  contentState,
  entityKey,
  children,
}): JSX.Element => {
  const [isAbsolute, setIsAbsolute] = useState<boolean>(false);
  const linkRef = useRef<any>(null);

  useEffect(() => {
    if (linkRef && linkRef.current.host !== location.host) {
      setIsAbsolute(true);
    }
  }, []);

  const {
    url,
  }: {
    url: string;
  } = contentState.getEntity(entityKey).getData();

  const handleOnClick = () => {
    if (isAbsolute) {
      window.open(url, "_blank");
    }
  };

  return (
    <a
      rel="nofollow noreferrer"
      href={url}
      target="_blank"
      onClick={handleOnClick}
      ref={linkRef}
    >
      {children}
    </a>
  );
};

export default Anchor;
