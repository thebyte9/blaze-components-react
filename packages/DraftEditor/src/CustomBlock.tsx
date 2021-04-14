// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { ContentState } from 'draft-js';

interface ICustomBlockProps {
  contentState: ContentState;
  block: any;
}

const CustomBlock = ({ contentState, block}: ICustomBlockProps) => {
  const HORIZONTAL_RULE = 'HORIZONTAL_RULE';
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
  block: PropTypes.object.isRequired
};

export default CustomBlock;