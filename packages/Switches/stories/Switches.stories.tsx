import { storiesOf } from "@storybook/react";
import React, { Suspense, lazy } from "react";
import SwitchesReadme from "../README.md";
import Tooltip from '@blaze-react/tooltip';

const Switches = lazy(() => import("../src/Switches")); // Lazy load the Switches component

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
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <h1>Switches</h1>
          <p>
            Switches component is a digital on/off switch used for activating one
            of two predefined options.
          </p>

          <h4>Single</h4>
          <Switches
            returnBoolean
            options={single}
            onChange={() => ({})}
          />

          <br />
          <br />
          <h4>Multiple</h4>
          <Switches
            tooltip={{
              tooltipContent: (
                <>tooltip on <em>click</em></>
              ),
              trigger: "click"
            }}
            options={multiple}
            onChange={() => ({})}
          />
        </div>
      </Suspense>
    );
  });
