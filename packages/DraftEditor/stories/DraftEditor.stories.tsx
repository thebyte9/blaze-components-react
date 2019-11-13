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
      '{"blocks":[{"key":"ai4n8","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a4bue","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"4a0pe","text":"testing","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"IMAGE","mutability":"IMMUTABLE","data":{"src":"https://images.pexels.com/photos/2956376/pexels-photo-2956376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"}}}}';
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
            // console.log(value);
          }}
        />
      </div>
    );
  });
