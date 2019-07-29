import withUtils from "@blaze-react/utils";
import React from "react";
interface ISpinnerCustomStyles {
  size?: number;
  backgroundColor?: string;
  border?: string;
  borderTopColor?: string;
}
interface ISpinnerProps {
  customStyles: ISpinnerCustomStyles;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
  lockContent?: boolean;
  animation: "ease" | "linear";
}

const Spinner = withUtils(
  ({
    customStyles: { size, backgroundColor, border, borderTopColor },
    lockContent,
    utils: { classNames },
    animation
  }: ISpinnerProps): JSX.Element => {
    const spinnerClassName: string = classNames({
      "loader__lock loader__lock--spinner": lockContent
    });

    const spinnerAnimationClassName: string = classNames("loader__spinner", {
      [`loader__spinner--${animation}`]: !!animation
    });

    return (
      <div className="loader">
        <div className={spinnerClassName} style={{ backgroundColor }}>
          <div
            className={spinnerAnimationClassName}
            style={{
              border,
              borderTopColor,
              height: `${size}px`,
              width: `${size}px`
            }}
          />
        </div>
      </div>
    );
  }
);

const animationType: object = {
  ease: "ease",
  linear: "linear"
};

Spinner.animationType = animationType;

Spinner.defaultProps = {
  animation: "linear",
  customStyles: {}
};

export default Spinner;
