import { storiesOf } from "@storybook/react";
import React, { Suspense } from "react";
import SwitchesReadme from "../README.md";
import Switches from "../src/Switches";
import Tooltip from '@blaze-react/tooltip'

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
  .add("Introduction", (): any => {
    const tooltip = (<Tooltip tooltipContent={<> tooltip on <em>click</em></>} trigger="click" />);

    return (
      <Suspense fallback={<div>Loading...</div>}>
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
              tooltip={tooltip}
              options={multiple}
              onChange={() => ({})}
            />
          </section>
        </div>
      </Suspense>
    );
  });
