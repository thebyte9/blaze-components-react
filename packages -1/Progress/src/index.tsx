import React, { useState } from "react";
interface IProgressProps {
  progress: number;
  type?: string | any;
  steps: any[];
  onChange: (...args: any[]) => any;
}
const Progress: React.SFC<IProgressProps> = ({
  progress,
  steps,
  type,
  onChange
}) => {
  const [currentProgress, setProgress] = useState(progress);
  const handleClick = ({ event, step }: { event: any; step: any }) => {
    setProgress(step);
    onChange({ event, step });
  };
  const checkStep = (step: any) => {
    if (step === steps.length && step === currentProgress) {
      return "final current";
    }
    if (step === currentProgress) {
      return "current";
    }
    if (step === steps.length) {
      return "final";
    }
    if (step <= currentProgress) {
      return "visited";
    }
    return "";
  };
  const isTypeCount = type === "count" ? "progress-bar__list-item--dots" : "";
  const modifiers = () => {
    const allModifiers = type.split(" ");
    const blockElement = "progress-bar__list-item--";
    if (!allModifiers.length) {
      return `${blockElement}${type}`;
    }
    return allModifiers
      .map((modifier: string) => `${blockElement}${modifier}`)
      .join(" ");
  };
  return (
    <nav className="progress-bar">
      <ol className="progress-bar__list">
        {steps.map((text, index) => (
          <li
            key={text}
            className={`progress-bar__list-item ${modifiers()} ${isTypeCount} ${checkStep(
              index + 1
            )}`}
          >
            <span
              onClick={event => handleClick({ event, step: index + 1 })}
              role="button"
            >
              {text}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};
Progress.defaultProps = {
  onChange: (): void => {
    return;
  },
  progress: 0,
  steps: [],
  type: "dots"
};
export default Progress;
