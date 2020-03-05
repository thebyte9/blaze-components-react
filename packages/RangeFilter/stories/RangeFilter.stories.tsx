import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import inputReadme from "../README.md";

const value = {
  max: 20000000,
  min: 10000000,
  step: 1,
  minValue: 10000000,
  maxValue: 20000000
};

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

          <RangeFilter
            label="Choose a range"
            value={value}
            onChange={(val: any): void => {
              // console.log(val);
            }}
            required
            error
            name="price"
            id="price"
          />
        </div>
      </Suspense>
    );
  });
