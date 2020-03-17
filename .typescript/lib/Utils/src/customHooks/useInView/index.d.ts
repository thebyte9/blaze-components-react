/// <reference types="react" />
import PropTypes from "prop-types";
declare global {
    interface Window {
        IntersectionObserver: any;
    }
}
interface IUseInView {
    ref?: any;
    once?: boolean;
    offset?: string;
}
declare function useInView({ ref, once, offset }: IUseInView): (boolean | import("react").MutableRefObject<undefined>)[];
declare namespace useInView {
    var displayName: string;
    var propTypes: {
        ref: PropTypes.Requireable<PropTypes.ReactElementLike>;
        rootMargin: PropTypes.Requireable<string>;
    };
}
export default useInView;
