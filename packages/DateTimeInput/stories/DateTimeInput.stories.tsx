import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import dateTimeInputReadme from "../README.md";

import "react-datepicker/dist/react-datepicker.css";

storiesOf("DateTime Input", module)
  .addParameters({
    readme: {
      sidebar: dateTimeInputReadme
    }
  })
  .add("Introduction", () => {
    const DateTimeInput: any = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Date Time Inputs</h1>
            <p>Create date pickers configured as date, time or datetime</p>
          </section>

          <h4>Date + Time</h4>
          <DateTimeInput
            label="Selects both date and time"
            onChange={(): void => {
              return;
            }}
            type="dateTime"
          />

          <h4>Only date</h4>
          <DateTimeInput
            label="Selects only date"
            onChange={(): void => {
              return;
            }}
            type="date"
          />

          <h4>Only time</h4>
          <DateTimeInput
            label="Selects only time"
            onChange={(): void => {
              return;
            }}
            type="time"
          />
        </div>
      </Suspense>
    );
  });
