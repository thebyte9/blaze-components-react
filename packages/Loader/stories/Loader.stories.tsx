import Input from "@blaze-react/input";
import { storiesOf } from "@storybook/react";
import React, { Fragment, useEffect, useState } from "react";
import LoaderReadme from "../README.md";
import Loader from "../src";

const LoaderDemo = (): JSX.Element => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  const handleChange = ({ value: rangeValue }: { value: string }): void =>
    setProgress(Number(rangeValue));

  return (
    <Fragment>
      <Loader labelLeft progress={progress} />
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
    <div className="component-wrapper">
      <h1>Loader</h1>
      <LoaderDemo />
    </div>
  ));
