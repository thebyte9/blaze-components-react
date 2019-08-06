import withUtils from "@blaze-react/utils";
import React from "react";
interface ISpinnerProps {
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
  lockContent?: boolean;
  size?: "bigg" | "med" | "small" | "x-small";
  animation: "ease" | "linear";
}

const Spinner = withUtils(
  ({
    size,
    lockContent,
    utils: { classNames },
    animation
  }: ISpinnerProps): JSX.Element => {
    const spinnerClassName: string = classNames({
      "loader__lock loader__lock--spinner": lockContent
    });

    const spinnerAnimationClassName: string = classNames("loader__spinner", {
      [`loader__spinner--${animation}`]: !!animation,
      [`loader__spinner--${size}`]: !!size
    });

    return (
      <div className="loader">
        <div className={spinnerClassName}>
          <div className={spinnerAnimationClassName} />
        </div>
      </div>
    );
  }
);

const animationType: object = {
  ease: "ease",
  linear: "linear"
};

const spinnerSize: object = {
  bigg: "bigg",
  med: "med",
  small: "small",
  xSmall: "x-small"
};

Spinner.animationType = animationType;
Spinner.size = spinnerSize;

Spinner.defaultProps = {
  animation: "linear"
};

export default Spinner;
