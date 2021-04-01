import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import DateRangeReadme from "../README.md";
import DateRange from "../src/DateRange";

storiesOf("DateRange", module)
  .addParameters({
    readme: {
      sidebar: DateRangeReadme,
    },
  })
  .add("Introduction", (): any => {
    return (
      <div className="component-wrapper">
        <h1>DateRange</h1>

        <DateRange onChange={(value: any) => {}} selected="custom" />
      </div>
    );
  });
