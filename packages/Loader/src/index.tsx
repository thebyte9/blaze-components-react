import withUtils from "@blaze-react/utils";
import React from "react";
import "./style.css";

interface ILoaderProps {
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
  labelLeft: boolean;
  progress: number;
}

const Loader = withUtils(
  ({ progress, labelLeft, utils: { classNames } }: ILoaderProps) => {
    const steps: object[] = [
      {
        final: 25,
        start: 0,
        step: 1
      },
      {
        final: 50,
        start: 25,
        step: 2
      },
      {
        final: 99,
        start: 50,
        step: 3
      },
      {
        final: 100,
        start: 99,
        step: 4
      }
    ];

    const progressClassName: string = `progress-b__progress`;

    const stepClassName: object = steps.reduce(
      (accumulator, { step, start, final }: any) => {
        accumulator[`${progressClassName}--step-${step}`] =
          progress > start && progress <= final;
        return accumulator;
      },
      {}
    );

    const progressClassNames: string = classNames(
      "progress-b__progress",
      stepClassName
    );

    const labelClassName: string = classNames("progress-b__label", {
      "progress-b__label--left": labelLeft
    });

    return (
      <div className="progress-b">
        <div className="progress-b__bar">
          <div className={progressClassNames} style={{ width: progress + "%" }}>
            <div className="progress-b__tick-wrapper">
              <i className="material-icons icon">done</i>
            </div>
          </div>
        </div>
        <span className={labelClassName}>
          {progress === 0
            ? `No scenes completed`
            : `${progress}% of scenes completed`}
        </span>
      </div>
    );
  }
);

export default Loader;
