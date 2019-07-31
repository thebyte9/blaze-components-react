// import Button from "@blaze-react/button";
import WithUtils from "@blaze-react/utils";
import React, { Fragment, useEffect, useState } from "react";
// import "../css/styles.css";

type TPosition = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

interface ISnackbarProps {
  utils: {
    classNames: (...args: any) => string;
  };
  onClose: () => {};
  isActive: boolean;
  position: TPosition;
  children?: JSX.Element | string;
}

const Snackbar = WithUtils(
  ({
    position,
    utils: { classNames },
    isActive,
    onClose
  }: ISnackbarProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(isActive);

    useEffect(() => {
      setActive(isActive);
    }, [isActive]);

    const snackbarClassNames: string = classNames("snackbar", {
      [`snackbar--${position}`]: !!position,
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
            <div className="message">We use cookies in our site.</div>
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
  bottomLeft: "bottomLeft",
  bottomRight: "bottomRight",
  topLeft: "topLeft",
  topRight: "topRight"
};

Snackbar.position = availablePosition;

export default Snackbar;
