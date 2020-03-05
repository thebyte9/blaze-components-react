import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { Suspense, useState } from "react";
import inputReadme from "../README.md";
import RangeFilter from "../src";

const value = {
  max: 20000000,
  min: 10000000,
  step: 1,
  minValue: 10000000,
  maxValue: 20000000
};

const RangeDemo = ({ id }: any) => {
  const [rangeValue] = useState(value);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRangeValue({
  //       max: 10000000000,
  //       min: 10000,
  //       step: 1,
  //       minValue: 50000,
  //       maxValue: 8000000
  //     });
  //   }, 30000000000);

  //   setTimeout(() => {
  //     setRangeValue({
  //       max: 1000000000,
  //       min: 10000,
  //       step: 5,
  //       minValue: 50000,
  //       maxValue: 80000000
  //     });
  //   }, 100000000000);
  // }, []);

  return (
    <RangeFilter
      label="Choose a range"
      value={rangeValue}
      onChange={(val: any): void => {
        // console.log(val);
      }}
      id={id}
      required
      error
      name="price"
    />
  );
};

storiesOf("Range Filter", module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    }
  })
  .add("Introduction", () => {
    // const RangeFilter: any = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Range Filter</h1>
          </section>

          {/* <RangeDemo /> */}

          <RangeDemo id="price" />

          {/* <RangeDemo /> */}

          {/* <h4>Range Filter with two moveable handlers</h4>
          <RangeFilter
            label="Choose a range"
            value={value}
            onChange={(val: any): void => {
              // console.log(val);
            }}
            required
            error
            name="price"
          />

          <RangeFilter
            label="Choose a range"
            value={value}
            onChange={(val: any): void => {
              // console.log(val);
            }}
            name="deposit"
          /> */}
        </div>
      </Suspense>
    );
  });
