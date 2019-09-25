import React from "react";
import { ILinkProps } from "../interfaces";

const Anchor = (props: ILinkProps): JSX.Element => {
  const { url }: { url: string } = props.contentState
    .getEntity(props.entityKey)
    .getData();
  return (
    <a rel="nofollow noreferrer" href={url} target="_blank">
      {props.children}
    </a>
  );
};

export default Anchor;
