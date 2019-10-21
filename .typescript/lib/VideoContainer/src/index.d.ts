import { FunctionComponent, IframeHTMLAttributes } from "react";
interface IVideoContainerProps extends IframeHTMLAttributes<HTMLIFrameElement> {
    src?: string;
    title?: string;
    frameborder?: string;
}
declare const VideoContainer: FunctionComponent<IVideoContainerProps>;
export default VideoContainer;
