import React, { Component } from "react";
import Timer from "../../Timer";
import { IProps, IState } from "../types/controller/controller";

class ToastController extends Component<IProps, IState> {
  public static defaultProps = {
    autoDismiss: false
  };
  public timeout: any;
  public state = {
    isRunning: Boolean(this.props.autoDismiss)
  };

  public componentDidMount() {
    this.startTimer();
  }
  public componentDidUpdate(prevProps: IProps) {
    if (prevProps.autoDismiss !== this.props.autoDismiss) {
      const startOrClear = this.props.autoDismiss
        ? this.startTimer
        : this.clearTimer;

      startOrClear();
    }
  }
  public componentWillUnmount() {
    this.clearTimer();
  }

  public startTimer = () => {
    const { autoDismiss, autoDismissTimeout, onDismiss } = this.props;

    if (!autoDismiss) {
      return;
    }

    this.setState({ isRunning: true });
    this.timeout = new Timer(onDismiss, autoDismissTimeout);
    this.timeout.resume();
  };
  public clearTimer = () => {
    if (this.timeout) {
      this.timeout.clear();
    }
  };

  public onMouseEnter = () => {
    this.setState({ isRunning: false }, () => {
      if (this.timeout) {
        this.timeout.pause();
      }
    });
  };
  public onMouseLeave = () => {
    this.setState({ isRunning: true }, () => {
      if (this.timeout) {
        this.timeout.resume();
      }
    });
  };

  public render() {
    const {
      autoDismiss,
      autoDismissTimeout,
      component: Toast,
      ...props
    } = this.props;
    const { isRunning } = this.state;

    const handleMouseEnter = autoDismiss ? this.onMouseEnter : undefined;
    const handleMouseLeave = autoDismiss ? this.onMouseLeave : undefined;

    return (
      <Toast
        autoDismiss={autoDismiss}
        autoDismissTimeout={autoDismissTimeout}
        {...props}
        isRunning={isRunning}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  }
}

export default ToastController;
