import { storiesOf } from "@storybook/react";
import React from "react";
import SwitchesReadme from "../README.md";
import Switches from "../src";
const multiple = [
  {
    id: 1,
    label: "Switch text"
  },
  {
    id: 2,
    label: "Switch text"
  },
  {
    disabled: true,
    id: 4,
    label: "Disabled"
  }
];
const single = {
  label: "Switch text",
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
        <p>
          Switches component is a digital on/off switch used for activating one
          of two predefined options.
        </p>
      </section>

      <hr />

      <section className="exampleSection">
        <h3>Single</h3>
        <Switches returnBoolean options={single} onChange={() => ({})} />

        <br />

        <h3>Multiple</h3>
        <Switches
          options={multiple}
          modifier="secondary"
          onChange={() => ({})}
        />
      </section>
    </div>
  ));
