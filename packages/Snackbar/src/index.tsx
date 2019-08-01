import WithUtils from "@blaze-react/utils";
import React, { Fragment, useEffect, useState } from "react";

type TPosition = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
type TModifier = "alert" | "info" | "success" | "warning";

interface ISnackbarProps {
  utils: {
    classNames: (...args: any) => string;
  };
  onClose: () => {};
  isActive: boolean;
  position: TPosition;
  modifier?: TModifier;
  children: JSX.Element | JSX.Element[] | string;
}

const Snackbar = WithUtils(
  ({
    position,
    utils: { classNames },
    isActive,
    onClose,
    modifier,
    children
  }: ISnackbarProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(isActive);

    useEffect(() => {
      setActive(isActive);
    }, [isActive]);

    const snackbarClassNames: string = classNames("snackbar", {
      [`snackbar--${position}`]: !!position,
      [`snackbar--${modifier}`]: !!modifier,
      active
    });

    const handleClose = () => {
      setActive(false);
      onClose();
    };

    return (
      <Fragment>
        {isActive && (
          <div className={snackbarClassNames}>
            <div className="message">{children}</div>
            <div className="close" onClick={handleClose}>
              <i className="material-icons">close</i>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
);

Snackbar.defaultProps = {};

const availablePosition: object = {
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
  topLeft: "top-left",
  topRight: "top-right"
};

const availableModifiers: object = {
  alert: "alert",
  info: "info",
  success: "success",
  warning: "warning"
};

Snackbar.position = availablePosition;
Snackbar.modifier = availableModifiers;

export default Snackbar;
