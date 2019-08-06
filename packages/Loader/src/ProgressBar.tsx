import withUtils from "@blaze-react/utils";
import React from "react";
interface IStep {
  start?: number;
  final?: number;
  backgroundColor?: string;
  icon?: string;
}

interface IMessage {
  incomplete: string;
  status: string;
  position: "left" | "right";
}
interface ILoaderProps {
  steps: IStep[];
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
  progress: number;
  lockContent: boolean;
  message: IMessage;
}

const ProgressBar = withUtils(
  ({
    steps,
    lockContent,
    progress,
    message: { incomplete, status, position },
    utils: { classNames }
  }: ILoaderProps): JSX.Element => {
    const { backgroundColor, icon }: IStep =
      steps.find(
        ({ start, final }: IStep | any) => progress > start && progress <= final
      ) || {};

    const loaderTypeClassName: string = classNames("loader", {
      [`loader__bar--lock`]: lockContent
    });

    const labelClassName: string = classNames("loader__status", {
      [`loader__status--${position}`]: !!position
    });

    const progressMessage: string = progress === 0 ? incomplete : status;

    return (
      <div className={loaderTypeClassName}>
        <span className={labelClassName}>{progressMessage}</span>
        <div className="loader__bar">
          <div
            className="loader__progress loader__progress--icon"
            style={{
              backgroundColor,
              width: `${progress}%`
            }}
          >
            {icon && (
              <div
                className="loader__step--default"
                style={{ backgroundColor }}
              >
                <i className="material-icons icon">{icon}</i>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

const availablePosition: object = {
  left: "left",
  right: "right"
};

const availableColors: object = {
  green: "green",
  orange: "orange",
  red: "red"
};

ProgressBar.position = availablePosition;
ProgressBar.backgroundColor = availableColors;

ProgressBar.defaultProps = {
  children: "",
  customStyles: {},
  message: {},
  steps: []
};

export default ProgressBar;
