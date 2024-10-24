import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import CheckboxesReadme from "../README.md";
import { Checkbox, Checkboxes } from '../src';
import Tooltip from '@blaze-react/tooltip';

const multiple = [
  {
    id: "one",
    label: "First",
    value: 1,
  },
  {
    id: "two",
    label: "Second",
    value: 2,
  },
  {
    id: "three",
    label: "Third",
    value: 3,
  },
  {
    disabled: true,
    id: "fourth",
    label: "Disabled",
    value: 4,
  },
];

const single = {
  id: 'single',
  label: "Do you agree?",
  required: true,
};

const tooltip = (
  <Tooltip
    tooltipContent={<>tooltip on <em>click</em> with custom background color</>}
    backgroundColor="lightblue"
    trigger="click"
    position="right"
  />
);

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
          <Checkboxes tooltip={tooltip} options={multiple} onChange={() => ({})} />

          <h3>Single</h3>
          <Checkboxes tooltip={tooltip} returnBoolean options={single} onChange={() => ({})} />
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
