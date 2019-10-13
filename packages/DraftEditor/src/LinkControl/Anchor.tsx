import React, { FunctionComponent } from "react";
import { ILinkProps } from "../interfaces";

const Anchor: FunctionComponent<ILinkProps> = ({
  contentState,
  entityKey,
  children
}): JSX.Element => {
  const { url }: { url: string } = contentState.getEntity(entityKey).getData();

  return (
    <a
      rel="nofollow noreferrer"
      href={url}
      target="_blank"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      {children}
    </a>
  );
};

export default Anchor;
