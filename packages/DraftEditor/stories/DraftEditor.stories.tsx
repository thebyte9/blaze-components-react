import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import DraftEditorReadme from "../README.md";
import DraftEditor from "../src";
storiesOf("DraftEditor", module)
  .addParameters({
    readme: {
      sidebar: DraftEditorReadme,
    },
  })
  .add("Introduction", (): any => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>DraftEditor</h1>
      </section>
      <DraftEditor
        name="custom editor"
        placeholder="content here ..."
        autoCapitalize="words"
        onChange={() => ({})}
      />
    </div>
  ));
