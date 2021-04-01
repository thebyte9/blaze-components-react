import React from 'react';
import PropTypes from 'prop-types';
import { ContentState } from 'draft-js';

interface IDecoratedLink {
  contentState: ContentState;
  entityKey: string;
  children: any;
  editLinkFn: any;
}

const DecoratedLink = ({ contentState, entityKey, children, editLinkFn }: IDecoratedLink) => {
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
  children: PropTypes.array
};

DecoratedLink.defaultProps = {
  children: []
};

export default DecoratedLink;
