import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import CheckboxesReadme from "../README.md";
import { Checkbox, Checkboxes } from '../src';

const tooltip = {
  tooltipContent: <>tooltip on <em>click</em> with custom background color</>,
  backgroundColor: "lightblue",
  trigger: "click",
  position: "right"
};

const multiple = [
  {
    id: "one",
    label: "First",
    value: 1,
    tooltip,
  },
  {
    id: "two",
    label: "Second",
    value: 2,
    tooltip,
  },
  {
    id: "three",
    label: "Third",
    value: 3,
    tooltip,
  },
  {
    disabled: true,
    id: "fourth",
    label: "Disabled",
    value: 4,
    tooltip,
  },
];

const single = {
  id: 'single',
  label: "Do you agree?",
  required: true,
  tooltip,
};

storiesOf("Checkboxes", module)
  .addParameters({
    readme: {
      sidebar: CheckboxesReadme,
    },
  })
  .add("Checkbox List", (): any => {
    return (
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
          <Checkboxes returnBoolean options={[single]} onChange={() => ({})} />
        </section>
      </div>
    );
  })
  .add("Checkbox Item", (): any => {
    return (
      <div className="component-wrapper">
        <section className="exampleSection">
          <h3>Multiselect</h3>
          <Checkbox
            {...{ ...multiple[0], checked: true }}
            onChange={() => ({})}
          />
        </section>
      </div>
    );
  });
