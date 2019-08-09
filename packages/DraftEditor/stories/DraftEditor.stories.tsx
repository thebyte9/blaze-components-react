import { storiesOf } from "@storybook/react";
import React from "react";
import DraftEditorReadme from "../README.md";
import DraftEditor from "../src";
storiesOf("DraftEditor", module)
  .addParameters({
    readme: {
      sidebar: DraftEditorReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>DraftEditor</h1>
      </section>

      <DraftEditor
        placeholder="content here ..."
        autoCapitalize="words"
      />
    </div>
  ));
