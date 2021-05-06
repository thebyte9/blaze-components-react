import WithUtils from "@blaze-react/utils";
import React, { Fragment, useEffect, useState } from "react";

type TPosition = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
type TModifier = "alert" | "info" | "success" | "warning";

interface IDefaultIcons {
  alert: string;
  info: string;
  success: string;
  warning: string;
}

interface ISnackbarProps {
  position: TPosition;
  modifier?: TModifier;
  isActive: boolean;
  iconName?: string;
  duration?: number;
  utils: {
    buildClassNames: (className: string | object, optionalClassNames?: object) => string;
  };
  onClose: () => {};
  children: JSX.Element | JSX.Element[] | string;
}

const Snackbar = WithUtils(
  ({
    position,
    utils: { buildClassNames },
    isActive,
    onClose,
    modifier,
    iconName,
    duration,
    children
  }: ISnackbarProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(isActive);

    useEffect((): void => {
      setActive(isActive);
      if (duration) {
        setTimeout((): void => setActive(false), duration);
      }
    }, [isActive, duration]);

    const snackbarClassNames: string = buildClassNames("snackbar", {
      [`snackbar--${position}`]: !!position,
      [`snackbar--${modifier}`]: !!modifier,
      active
    });

    const defaultIcons: IDefaultIcons = {
      alert: "erro",
      info: "info",
      success: "done_all",
      warning: "warning"
    };

    const handleClose = (): void => {
      setActive(false);
      onClose();
    };

    const getIcon = (): string => {
      if (iconName) {
        return iconName;
      }
      if (modifier) {
        return defaultIcons[modifier];
      }
      return "";
    };

    const icon: string = getIcon();

    return (
      <Fragment>
        {active && (
          <div className={snackbarClassNames}>
            <div className="message">
              {icon && <i className="material-icons">{icon}</i>}
              {children}
            </div>
            <div className="close" onClick={handleClose}>
              <i className="material-icons">close</i>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
);

Snackbar.defaultProps = {
  onClose: () => ({})
};

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