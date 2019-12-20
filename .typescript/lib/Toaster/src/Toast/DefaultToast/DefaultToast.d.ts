/// <reference types="react" />
import { IToastProps } from "../types/common";
declare const DefaultToast: {
    ({ appearance, autoDismiss, autoDismissTimeout, children, isRunning, onDismiss, placement, transitionDuration, transitionState, onMouseEnter, onMouseLeave, ...otherProps }: IToastProps): JSX.Element;
    defaultProps: {
        onDismiss: () => void;
    };
};
export default DefaultToast;
