declare const PLACEMENTS: {
    "bottom-center": {
        bottom: number;
        left: string;
        transform: string;
    };
    "bottom-left": {
        bottom: number;
        left: number;
    };
    "bottom-right": {
        bottom: number;
        right: number;
    };
    "top-center": {
        top: number;
        left: string;
        transform: string;
    };
    "top-left": {
        top: number;
        left: number;
    };
    "top-right": {
        top: number;
        right: number;
    };
};
declare const DEFAULT_AUTO_DISMISS_TIMEOUT = 5000;
declare const DEFAULT_PLACEMENT = "top-right";
declare const DEFAULT_TRANSITION_DURATION = 220;
export { PLACEMENTS, DEFAULT_AUTO_DISMISS_TIMEOUT, DEFAULT_PLACEMENT, DEFAULT_TRANSITION_DURATION };
