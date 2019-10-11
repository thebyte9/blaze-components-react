import React, { FunctionComponent } from "react";
import eventBus from "../eventBus";
import { ILinkProps } from "../interfaces";

const Anchor: FunctionComponent<ILinkProps> = ({
  contentState,
  entityKey,
  children
}): JSX.Element => {
  const { url }: { url: string } = contentState.getEntity(entityKey).getData();

  const showModal = () => eventBus.$emit("edit-link", { url });

  return (
    <a rel="nofollow noreferrer" href={url} target="_blank" onClick={showModal}>
      {children}
    </a>
  );
};

export default Anchor;
