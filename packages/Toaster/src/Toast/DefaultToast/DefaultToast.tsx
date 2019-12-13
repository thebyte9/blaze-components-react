import React from "react";
import Icon from "../../Icon";
import { CloseIcon } from "../../Icons";
import ToastElement from "../ToastElement";
import { IToastProps } from "../types/common";
import { NOOP } from "../utils";

const DefaultToast = ({
  appearance,
  autoDismiss,
  autoDismissTimeout,
  children,
  isRunning,
  onDismiss,
  placement,
  transitionDuration,
  transitionState,
  onMouseEnter,
  onMouseLeave,
  ...otherProps
}: IToastProps) => (
  <ToastElement
    appearance={appearance}
    placement={placement}
    transitionState={transitionState}
    transitionDuration={transitionDuration}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    {...otherProps}
  >
    <Icon
      appearance={appearance}
      autoDismiss={autoDismiss}
      autoDismissTimeout={autoDismissTimeout}
      isRunning={isRunning}
    />
    <div className="react-toast-notifications__toast__content">{children}</div>
    {onDismiss ? (
      <div
        role="button"
        className="react-toast-notifications__toast__dismiss-button"
        onClick={onDismiss}
      >
        <CloseIcon
          className={`react-toast-notifications__toast__dismiss-icon react-toast-notifications__toast__dismiss-icon--${appearance}`}
        />
        <span className="react-toast-notifications__toast__dismiss-text" />
      </div>
    ) : null}
  </ToastElement>
);

DefaultToast.defaultProps = {
  onDismiss: NOOP
};

export default DefaultToast;
