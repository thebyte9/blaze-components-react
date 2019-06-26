import React, { FunctionComponent, IframeHTMLAttributes } from "react";
interface VideoContainerProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  src?: string,
  title?: string,
  frameborder?: string,
};
const VideoContainer: FunctionComponent<VideoContainerProps> = ({
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
