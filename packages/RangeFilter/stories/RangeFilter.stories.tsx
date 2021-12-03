import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import inputReadme from "../README.md";

const value = {
  max: 9000,
  min: 1000,
  step: 10,
  minValue: 1000,
  maxValue: 5000
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
