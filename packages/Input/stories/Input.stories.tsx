import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import inputReadme from "../README.md";

storiesOf("Text Inputs", module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    }
  })
  .add("Introduction", () => {
    const Input: any = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Text Inputs</h1>
            <p>Create basic single-line text fields.</p>
          </section>

          <h4>Required</h4>
          <Input
            label="Required field with error activated"
            placeholder="Enter email"
            validationMessage="Email address is required"
            onChange={(): void => {
              return;
            }}
            type="email"
            required
            error
          />
          <h4>Number</h4>
          <Input
            label="Number Input"
            value="9"
            onChange={(): void => {
              return;
            }}
            type="number"
          />
          <h4>Disabled</h4>
          <Input
            label="Text input disabled"
            placeholder="Placeholder text"
            onChange={(): void => {
              return;
            }}
            modifier="full-width"
            hideTypeToggle
            disabled
          />

          <h4>Password toggle type</h4>
          <Input
            label="Password - show hide"
            placeholder="******"
            onChange={(): void => {
              return;
            }}
            type="password"
            value="Lorem ipsum"
          />

          <h4>Date</h4>
          <Input
            label="Date Picker"
            placeholder="******"
            onChange={(): void => {
              return;
            }}
            type="date"
          />
        </div>
      </Suspense>
    );
  });
