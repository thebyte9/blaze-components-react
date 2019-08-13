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
  .add("Introduction", () => {
    const testValueJSON =
      '{"blocks":[{"key":"ai4n8","text":"testing","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}';
    return (
      <div className="component-wrapper">
        <section className="introductionSection">
          <h1>DraftEditor</h1>
        </section>

        <DraftEditor
          name="custom editor"
          placeholder="content here ..."
          autoCapitalize="words"
          value={testValueJSON}
          onChange={({
            event: {
              target: { name, value }
            }
          }: {
            event: { target: { name: string; value: string } };
          }) => {
            console.log("event --> ", name);
          }}
        />
      </div>
    );
  });
