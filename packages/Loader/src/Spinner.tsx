import buildClassNames from '../../Utils/src/buildClassNames';
import React from "react";
interface ISpinnerProps {
  lockContent?: boolean;
  size?: "bigg" | "med" | "small" | "x-small";
  animation: "ease" | "linear";
}

const Spinner = 
  ({
    size,
    lockContent,
    animation
  }: ISpinnerProps): JSX.Element => {
    const spinnerClassName: string = buildClassNames({
      "loader__lock loader__lock--spinner": lockContent
    });

    const spinnerAnimationClassName: string = buildClassNames("loader__spinner", {
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
  };

const animationType: Record<string, unknown> = {
  ease: "ease",
  linear: "linear"
};

const spinnerSize: Record<string, unknown> = {
  big: "big",
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
