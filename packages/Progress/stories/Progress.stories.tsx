import "@blaze-react/blaze-components-theme";

import Progress from "../src/Progress";
import ProgressReadme from "../README.md";
import React from "react";
import { storiesOf } from "@storybook/react";

const steps = ["Cart", "Billing", "Delivery", "Review & pay"];
storiesOf("Progress", module)
  .addParameters({
    readme: {
      sidebar: ProgressReadme
    }
  })
  .add("Introduction", () => {
    return (
        <div className="component-wrapper">
          <h1>Progress</h1>

          <p>
            The progress bar, despite providing a good user experience, also
            helps users avoid frustration and successfully complete all the
            steps.
          </p>

          <h4>Progress dot indicators</h4>
          <Progress progress={2} onChange={() => {}} steps={steps} />
          <br />
          <br />

          <h4>Progress dot indicators + steps counter</h4>
          <Progress
            progress={3}
            type="count"
            onChange={() => {}}
            steps={steps}
          />
          <br />
          <br />

          <h4>Progress Text</h4>
          <Progress
            progress={1}
            type="text"
            onChange={() => {}}
            steps={steps}
          />
          <br />
          <br />

          <h4>Progress + text + completed icon</h4>
          <Progress
            progress={4}
            type="text icon"
            onChange={() => {}}
            steps={steps}
          />
          <br />
          <br />
        </div>
    );
  });
