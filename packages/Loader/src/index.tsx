import withUtils from "@blaze-react/utils";
import React from "react";
import Spinner from "./Spinner";
import "./style.css";

interface IStep {
  final?: number;
  start?: number;
  color?: string;
  icon?: string;
  height?: number;
  radius?: number;
  size?: number;
}

interface IMessage {
  incomplete: string;
  status: string;
  position: "left" | "right";
}
interface ILoaderProps {
  steps: IStep[];
  customStyles: IStep;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
  labelLeft: boolean;
  progress: number;
  lockContent: boolean;
  message: IMessage;
}

const BarProgress = withUtils(
  ({
    steps,
    lockContent,
    customStyles,
    progress,
    message: { incomplete, status, position },
    utils: { classNames }
  }: ILoaderProps): JSX.Element => {
    const { color, icon, height, radius }: IStep =
      steps.find(
        ({ start, final }: any) => progress > start && progress <= final
      ) || customStyles;

    const loaderTypeClassName: string = classNames("loader", {
      [`loader__bar--lock`]: lockContent
    });

    const labelClassName: string = classNames("loader__label", {
      [`loader__label--${position}`]: !!position
    });

    const progressMessage: string = progress === 0 ? incomplete : status;

    return (
      <div className={loaderTypeClassName}>
        <div
          className="loader__bar"
          style={{
            borderRadius: `${radius}px`
          }}
        >
          <div
            className="loader__progress loader__progress--icon"
            style={{
              backgroundColor: color,
              borderRadius: `${radius}px`,
              height: `${height}px`,
              width: `${progress}%`
            }}
          >
            {icon && (
              <div
                className="loader__tick-wrapper"
                style={{
                  backgroundColor: color,
                  borderRadius: `${radius}px`
                }}
              >
                <i className="material-icons icon">{icon}</i>
              </div>
            )}
          </div>
        </div>
        <span className={labelClassName}>{progressMessage}</span>
      </div>
    );
  }
);

const availablePosition: object = {
  left: "left",
  right: "right"
};

BarProgress.position = availablePosition;

BarProgress.defaultProps = {
  children: "",
  customStyles: {},
  message: {},
  steps: []
};

export { Spinner, BarProgress };
