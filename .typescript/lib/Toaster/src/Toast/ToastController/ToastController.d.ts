import { Component } from "react";
import { IProps, IState } from "../types/controller/controller";
declare class ToastController extends Component<IProps, IState> {
    static defaultProps: {
        autoDismiss: boolean;
    };
    timeout: any;
    state: {
        isRunning: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: IProps): void;
    componentWillUnmount(): void;
    startTimer: () => void;
    clearTimer: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    render(): JSX.Element;
}
export default ToastController;
