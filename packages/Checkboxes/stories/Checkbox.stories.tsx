import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense, FunctionComponent } from "react";
import CheckboxesReadme from "../README.md";

const multiple = [
  {
    id: "one",
    label: "First",
    value: 1
  },
  {
    id: "two",
    label: "Second",
    value: 2
  },
  {
    id: "three",
    label: "Third",
    value: 3
  },
  {
    disabled: true,
    id: "fourth",
    label: "Disabled",
    value: 4
  }
];
const single = {
  label: "Do you agree?",
  required: true
};
storiesOf("Checkboxes", module)
  .addParameters({
    readme: {
      sidebar: CheckboxesReadme
    }
  })
  .add("Checkbox List", (): any => {
    const Checkboxes: any = lazy(async (): Promise<{ default: FunctionComponent }> => {
      const { Checkboxes } = await import("../src")
      return { default: Checkboxes }
    });

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Checkboxes</h1>
            <p>
              Boxes that are checked (ticked) when activated. They allow you to
              select single values for submission in a form (or not).
            </p>
          </section>

          <hr />

          <section className="exampleSection">
            <h3>Multiselect</h3>
            <Checkboxes options={multiple} onChange={() => ({})} />

            <h3>Single</h3>
            <Checkboxes returnBoolean options={single} onChange={() => ({})} />
          </section>
        </div>
      </Suspense>
    );
  }).add("Checkbox Item", (): any => {
    const Checkbox: any = lazy(async (): Promise<{ default: FunctionComponent }> => {
      const { Checkbox } = await import("../src")
      return { default: Checkbox }
    });

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="exampleSection">
            <h3>Multiselect</h3>
            <Checkbox {...{ ...multiple[0], checked: true }} onChange={() => ({})} />
          </section>
        </div>
      </Suspense>
    );
  });
