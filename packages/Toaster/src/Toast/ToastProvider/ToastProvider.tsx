import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import {
  DEFAULT_AUTO_DISMISS_TIMEOUT,
  DEFAULT_PLACEMENT,
  DEFAULT_TRANSITION_DURATION
} from "../constants";
import DefaultToast from "../DefaultToast";
import ToastContainer from "../ToastContainer/ToastContainer";
import ToastContext from "../ToastContext";
import ToastController from "../ToastController";
import { Callback, Id, IOptions } from "../types/common";
import { IProps, IState } from "../types/provider/provider";
import { generateUEID, NOOP } from "../utils";

const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

class ToastProvider extends Component<IProps, IState> {
  public static defaultProps = {
    autoDismiss: false,
    autoDismissTimeout: DEFAULT_AUTO_DISMISS_TIMEOUT,
    components: { Toast: DefaultToast, ToastContainer },
    placement: DEFAULT_PLACEMENT,
    transitionDuration: DEFAULT_TRANSITION_DURATION
  };

  public state = { toasts: [] };

  public has = (id: string) => {
    if (!this.state.toasts.length) {
      return false;
    }

    return Boolean(this.state.toasts.filter((t: any) => t.id === id).length);
  };
  public onDismiss = (id: Id, cb: Callback = NOOP) => () => {
    cb(id);
    this.remove(id);
  };

  public add = (
    content: JSX.Element,
    options: IOptions = {},
    cb: Callback = NOOP
  ) => {
    const id = options.id || generateUEID();
    const callback = () => cb(id);

    if (this.has(id)) {
      return;
    }

    this.setState((state: any): any => {
      const newToast = { content, id, ...options };
      const toasts = [...state.toasts, newToast];

      return { toasts };
    }, callback);

    return id;
  };
  public remove = (id: Id, cb: Callback = NOOP) => {
    const callback = () => cb(id);

    if (!this.has(id)) {
      return;
    }

    this.setState(state => {
      const toasts = state.toasts.filter(t => t.id !== id);
      return { toasts };
    }, callback);
  };
  public removeAll = () => {
    if (!this.state.toasts.length) {
      return;
    }

    this.state.toasts.forEach((t: any) => this.remove(t.id));
  };
  public update = (id: Id, options: IOptions = {}, cb: Callback = NOOP) => {
    const callback = () => cb(id);

    if (!this.has(id)) {
      return;
    }

    this.setState(state => {
      const old = state.toasts;
      const i = old.findIndex(t => t.id === id);
      const updatedToast = { ...old[i], ...options };
      const toasts = [...old.slice(0, i), updatedToast, ...old.slice(i + 1)];

      return { toasts };
    }, callback);
  };

  public render() {
    const {
      autoDismiss: inheritedAutoDismiss,
      autoDismissTimeout,
      children,
      components,
      placement,
      transitionDuration
    } = this.props;
    const { Toast, ToastContainer } = { ...components };
    const { add, remove, removeAll, update } = this;
    const toasts = Object.freeze(this.state.toasts);

    const hasToasts = Boolean(toasts.length);
    const portalTarget = canUseDOM ? document.body : null;

    return (
      <ToastContext.Provider value={{ add, remove, removeAll, update, toasts }}>
        {children}

        {portalTarget ? (
          createPortal(
            <ToastContainer placement={placement} hasToasts={hasToasts}>
              <TransitionGroup component={null}>
                {toasts.map(
                  ({
                    appearance,
                    autoDismiss,
                    content,
                    id,
                    onDismiss,
                    ...unknownConsumerProps
                  }: any) => (
                    <Transition
                      appear
                      key={id}
                      mountOnEnter
                      timeout={transitionDuration}
                      unmountOnExit
                    >
                      {transitionState => (
                        <ToastController
                          appearance={appearance}
                          autoDismiss={
                            autoDismiss !== undefined
                              ? autoDismiss
                              : inheritedAutoDismiss
                          }
                          autoDismissTimeout={autoDismissTimeout}
                          component={Toast}
                          key={id}
                          onDismiss={this.onDismiss(id, onDismiss)}
                          placement={placement}
                          transitionDuration={transitionDuration}
                          transitionState={transitionState}
                          {...unknownConsumerProps}
                        >
                          {content}
                        </ToastController>
                      )}
                    </Transition>
                  )
                )}
              </TransitionGroup>
            </ToastContainer>,
            portalTarget
          )
        ) : (
          <ToastContainer placement={placement} hasToasts={hasToasts} /> // keep ReactDOM.hydrate happy
        )}
      </ToastContext.Provider>
    );
  }
}

export default ToastProvider;
