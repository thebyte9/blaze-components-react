// @ts-nocheck

import PropTypes from "prop-types";
import React from "react";

const DecoratedLink = (props) => {
  const { contentState, entityKey, children, editLinkFn } = props;
  const { url } = contentState.getEntity(entityKey).getData();

  return (
    <a href={url} onClick={() => editLinkFn(contentState, entityKey, children)}>
      {children}
    </a>
  );
};

DecoratedLink.propTypes = {
  entityKey: PropTypes.string.isRequired,
  contentState: PropTypes.object.isRequired,
  editLinkFn: PropTypes.func.isRequired,
  children: PropTypes.array,
};

DecoratedLink.defaultProps = {
  children: [],
};

export default DecoratedLink;
