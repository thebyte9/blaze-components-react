import React, { FunctionComponent, IframeHTMLAttributes } from "react";

interface IVideoContainerProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  src?: string;
  title?: string;
  frameborder?: string;
}
const VideoContainer: FunctionComponent<IVideoContainerProps> = ({
  src,
  title,
  ...attrs
}) => (
  <div className="media-container media-container--video">
    <iframe src={src} title={title} {...attrs} />
  </div>
);
VideoContainer.defaultProps = {
  src: "",
  title: ""
};
export default VideoContainer;
