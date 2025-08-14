import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
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

const InteractiveCheckboxes = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [singleValue, setSingleValue] = useState<boolean>(false);

  const handleMultipleChange = ({ value }: any) => {
    setSelectedItems(value.map((item: any) => item.id));
  };

  const handleSingleChange = ({ value }: any) => {
    setSingleValue(value);
  };

  return (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Checkboxes with Clickable Labels</h1>
        <p>
          Click on the labels to toggle the checkboxes. The labels are now fully clickable!
        </p>
      </section>

      <hr />

      <section className="exampleSection">
        <h3>Multiselect (Clickable Labels)</h3>
        <p>Selected items: {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}</p>
        <Checkboxes
          options={multiple}
          onChange={handleMultipleChange}
        />

        <h3>Single (Clickable Label)</h3>
        <p>Value: {singleValue ? 'Yes' : 'No'}</p>
        <Checkboxes
          returnBoolean
          options={[single]}
          onChange={handleSingleChange}
        />
      </section>
    </div>
  );
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
  .add("Interactive with Clickable Labels", (): any => {
    return <InteractiveCheckboxes />;
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
