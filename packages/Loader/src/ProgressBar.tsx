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
    buildClassNames: (className: string | object, optionalClassNames?: object) => string;
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
    utils: { buildClassNames }
  }: ILoaderProps): JSX.Element => {
    const { backgroundColor, icon }: IStep =
      steps.find(
        ({ start, final }: IStep | any) => progress > start && progress <= final
      ) || {};

    const loaderTypeClassName: string = buildClassNames("loader", {
      [`loader__bar--lock`]: lockContent
    });

    const labelClassName: string = buildClassNames("loader__status", {
      [`loader__status--${position}`]: !!position
    });

    const progressMessage: string = progress === 0 ? incomplete : status;

    const loaderClassName: string = buildClassNames(
      "loader__progress loader__progress--icon",
      {
        [`loader__progress--${backgroundColor}`]: !!backgroundColor
      }
    );

    const stepClassName: string = buildClassNames("loader__step--default", {
      [`loader__progress--${backgroundColor}`]: !!backgroundColor
    });

    return (
      <div className={loaderTypeClassName}>
        <span className={labelClassName}>{progressMessage}</span>
        <div className="loader__bar">
          <div className={loaderClassName} style={{ width: `${progress}%` }}>
            {icon && (
              <div className={stepClassName}>
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
