import { storiesOf } from "@storybook/react";
import React from "react";
import SwitchesReadme from "../README.md";
import Switches from "../src";
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
storiesOf("Switches", module)
  .addParameters({
    readme: {
      sidebar: SwitchesReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Switches</h1>
        {/* <p>
          Boxes that are checked (ticked) when activated. They allow you to
          select single values for submission in a form (or not).
        </p> */}
      </section>

      <hr />

      <section className="exampleSection">
        <h3>Single</h3>
        <div className="form-field form-field--checkbox">
          <Switches
            options={single}
            onChange={e => {
              console.log(e);
            }}
          />
        </div>

        <h3>Multiple</h3>
        <div className="form-field form-field--checkbox">
          <Switches
            options={multiple}
            onChange={e => {
              console.log(e);
            }}
          />
        </div>
      </section>
    </div>
  ));
