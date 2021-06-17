import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import RadioReadme from "../README.md";

const options = [
  {
    label: "A",
    value: 1,
    id: "one"
  },
  {
    label: "B",
    value: 2,
    required: true,
    id: "two"
  },
  {
    label: "C",
    value: 3,
    id: "three"
  },
  {
    label: "Disabled",
    value: "",
    disabled: true,
    id: "four"
  }
];
storiesOf("Radio Buttons", module)
  .addParameters({
    readme: {
      sidebar: RadioReadme
    }
  })
  .add("Introduction", () => {
    const RadioButton: any = lazy((): any => import("../src/RadioButton"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <form>
          <div className="component-wrapper">
            <h1>Radio Buttons</h1>
            <p>
              Only one radio button in a given group can be selected at the same
              time. Radio buttons are typically rendered as small circles, which
              are filled or highlighted when selected.
            </p>

            <h4>Choose</h4>
            <RadioButton required options={options} onChange={() => {}} />
          </div>
        </form>
      </Suspense>
    );
  });
