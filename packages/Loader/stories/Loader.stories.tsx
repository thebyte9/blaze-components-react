import Input from "@blaze-react/input";
import { storiesOf } from "@storybook/react";
import React, { Fragment, useEffect, useState } from "react";
import LoaderReadme from "../README.md";
import { ProgressBar, Spinner } from "../src";

interface IStep {
  start: number;
  final: number;
  color?: string;
  icon?: string;
  height?: number;
}

const ProgressDemo = (): JSX.Element => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => setProgress(100), 2000);
  }, []);

  const handleChange = ({ value: rangeValue }: { value: string }): void =>
    setProgress(Number(rangeValue));

  const steps: IStep[] = [
    {
      start: 0,
      final: 99,
      color: "#ffc107",
      icon: "priority_high"
    },
    {
      start: 99,
      final: 100,
      color: "#4caf50",
      icon: "done"
    }
  ];

  return (
    <Fragment>
      <ProgressBar
        steps={steps}
        progress={progress}
        message={{
          incomplete: "Loading...",
          status: `${progress}%`,
          position: ProgressBar.position.left
        }}
      />
      <br />
      <Input
        type="range"
        value={progress}
        onChange={handleChange}
        style={{ padding: 0, border: 0 }}
      />
    </Fragment>
  );
};

storiesOf("Loader", module)
  .addParameters({
    readme: {
      sidebar: LoaderReadme
    }
  })
  .add("Introduction", () => (
    <Fragment>
      <div className="component-wrapper">
        <h1>Progress bar</h1>
        <h4>default</h4>
        <ProgressBar progress={40} />

        <br />
        <br />
        <h4>Interactive with steps and icons</h4>
        <ProgressDemo />
      </div>

      <div className="component-wrapper">
        <h1>Spinner</h1>
        <h4>Default</h4>
        <Spinner />

        <div className="component-wrapper" style={{ position: "relative" }}>
          <h4>Custom styles and lock Content</h4>
          <Spinner
            customStyles={{
              backgroundColor: "rgba(0, 0, 0, .1)",
              border: "4px solid rgba(0, 0, 0, .1)",
              borderTopColor: "#fff",
              size: 70
            }}
            animation={Spinner.animationType.ease}
            lockContent
          />
        </div>
      </div>
    </Fragment>
  ));
