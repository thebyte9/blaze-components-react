import { Component } from "react";
import { Callback, IOptions } from "../types/common";
import { IProps, IState } from "../types/provider/provider";
declare class ToastProvider extends Component<IProps, IState> {
    static defaultProps: {
        autoDismiss: boolean;
        autoDismissTimeout: number;
        components: {
            Toast: {
                ({ appearance, autoDismiss, autoDismissTimeout, children, isRunning, onDismiss, placement, transitionDuration, transitionState, onMouseEnter, onMouseLeave, ...otherProps }: import("../types/common").IToastProps): JSX.Element;
                defaultProps: {
                    onDismiss: () => void;
                };
            };
            ToastContainer: ({ hasToasts, placement, ...props }: any) => JSX.Element;
        };
        placement: string;
        transitionDuration: number;
    };
    state: {
        toasts: never[];
    };
    has: (id: string) => boolean;
    onDismiss: (id: string, cb?: Callback) => () => void;
    add: (content: JSX.Element, options?: IOptions, cb?: Callback) => any;
    remove: (id: string, cb?: Callback) => void;
    removeAll: () => void;
    update: (id: string, options?: IOptions, cb?: Callback) => void;
    render(): JSX.Element;
}
export default ToastProvider;
