import Input from "@blaze-react/input";
import { storiesOf } from "@storybook/react";
import React, { Fragment, useEffect, useState } from "react";
import LoaderReadme from "../README.md";
import { BarProgress, Spinner } from "../src";

interface IStep {
  start: number;
  final: number;
  color: string;
  icon?: string;
  height?: number;
}

const ProgressDemo = (): JSX.Element => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  const handleChange = ({ value: rangeValue }: { value: string }): void =>
    setProgress(Number(rangeValue));

  const steps: IStep[] = [
    {
      start: 0,
      final: 25,
      color: "#FB7593",
      icon: "priority_high"
    },
    {
      start: 25,
      final: 50,
      color: "#FFD05C"
    },
    {
      start: 50,
      final: 99,
      color: "#76E19E"
    },
    {
      start: 99,
      final: 100,
      color: "#76E19E",
      icon: "done"
    }
  ];

  return (
    <Fragment>
      <BarProgress
        steps={steps}
        progress={progress}
        message={{
          incomplete: "No scenes completed",
          status: `${progress}% of scenes completed`,
          position: BarProgress.position.left
        }}
      />
      <Input type="range" value={progress} onChange={handleChange} />
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
        <ProgressDemo />
        <BarProgress progress={40} />
      </div>

      <div className="component-wrapper">
        <h1>Spinner</h1>
        <h4>default</h4>
        <Spinner />
      </div>

      <div className="component-wrapper">
        <h4>Custom styles & lock Content</h4>
        <Spinner
          customStyles={{
            backgroundColor: "rgba(255, 255, 255, .5)",
            border: "5px solid rgba(0, 0, 0, .1)",
            borderTopColor: "rgba(0, 0, 0, .5)",
            size: 70
          }}
          animation={Spinner.animationType.ease}
          lockContent
        />
      </div>
    </Fragment>
  ));
