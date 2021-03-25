import withUtils from "@blaze-react/utils";
import React from "react";
interface ISpinnerProps {
  utils: {
    buildClassNames: (className: string | object, optionalClassNames?: object) => string;
  };
  lockContent?: boolean;
  size?: "bigg" | "med" | "small" | "x-small";
  animation: "ease" | "linear";
}

const Spinner = withUtils(
  ({
    size,
    lockContent,
    utils: { buildClassNames },
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
  }
);

const animationType: object = {
  ease: "ease",
  linear: "linear"
};

const spinnerSize: object = {
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
