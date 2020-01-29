import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import inputReadme from "../README.md";

const value = {
  firstHandler: {
    max: 10,
    min: 0,
    step: 0,
    value: 0
  },
  secondHandler: {
    max: 10,
    min: 0,
    step: 0,
    value: 0
  }
};

const { firstHandler } = value;

storiesOf("Range Filter", module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    }
  })
  .add("Introduction", () => {
    const RangeFilter: any = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Range Filter</h1>
          </section>

          <h4>Range Filter with two moveable handlers</h4>
          <RangeFilter
            label="Choose a range"
            value={value}
            onChange={(val: any): void => {
              // console.log(val);
            }}
          />

          <h4>Range Filter with one moveable handler</h4>
          <RangeFilter
            label="Required field with error activated"
            validationMessage="This field is required"
            value={{ firstHandler }}
            onChange={(val: any): void => {
              // console.log(val);
            }}
            required
            error
          />
        </div>
      </Suspense>
    );
  });
