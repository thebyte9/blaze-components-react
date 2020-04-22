import React, { FunctionComponent } from "react";
import { ILinkProps } from "../../../interfaces";

const Anchor: FunctionComponent<ILinkProps> = ({
  contentState,
  entityKey,
  children,
}): JSX.Element => {
  const {
    url,
    relativeUrl,
  }: { url: string; relativeUrl?: string } = contentState
    .getEntity(entityKey)
    .getData();

  const handleOnClick = () => {
    if (url.includes("http")) {
      openUrl(url);
    } else {
      const rel =
        relativeUrl && relativeUrl.slice(-1) === "/"
          ? relativeUrl
          : `${relativeUrl}/`;

      openUrl(rel + url);
    }
  };

  const openUrl = (path: string) => window.open(path, "_blank");

  return (
    <a
      rel="nofollow noreferrer"
      href={url}
      target="_blank"
      onClick={handleOnClick}
    >
      {children}
    </a>
  );
};

export default Anchor;
