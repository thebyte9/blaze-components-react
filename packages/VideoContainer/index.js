import React from 'react';
import PropTypes from 'prop-types';

const VideoContainer = ({ src, title, ...attrs }) => (
  <div className="media-container media-container--video">
    <iframe src={src} title={title} {...attrs} />
  </div>
);

VideoContainer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string
};

VideoContainer.defaultProps = {
  src: '',
  title: ''
};

export default VideoContainer;
