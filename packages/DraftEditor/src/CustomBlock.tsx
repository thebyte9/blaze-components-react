// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";

const CustomBlock = (props) => {
  const HORIZONTAL_RULE = "HORIZONTAL_RULE";

  const { contentState, block } = props;

  const entityKey = block.getEntityAt(0);

  if (!entityKey) return null;

  const entity = contentState.getEntity(entityKey);

  const type = entity.getType();

  if (type === HORIZONTAL_RULE) {
    return <hr className="editor-view__textblock--hr" />;
  }

  return null;
};

CustomBlock.propTypes = {
  contentState: PropTypes.object.isRequired,
  block: PropTypes.object.isRequired,
};

export default CustomBlock;
