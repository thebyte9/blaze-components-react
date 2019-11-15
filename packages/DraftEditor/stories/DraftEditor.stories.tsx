import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import DraftEditorReadme from "../README.md";
import DraftEditor from "../src";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw, EditorState } from "draft-js";
const entities = require("entities");

storiesOf("DraftEditor", module)
  .addParameters({
    readme: {
      sidebar: DraftEditorReadme
    }
  })
  .add("Introduction", () => {
    const Editor = () => {
      const [draftContent, setDraftContent] = useState(
        '{"blocks":[{"key":"ai4n8","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a4bue","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"4a0pe","text":"testing","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"IMAGE","mutability":"IMMUTABLE","data":{"src":"https://images.pexels.com/photos/2956376/pexels-photo-2956376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"}}}}'
      );

      const onChange = ({
        event: {
          target: { name, value }
        }
      }: {
        event: { target: { name: string; value: string } };
      }) => {
        setDraftContent(draftContent);
      };

      const preview = () => {
        let convertTtateToHTML: any = entities.decodeHTML(
          stateToHTML(
            EditorState.createWithContent(
              convertFromRaw(JSON.parse(draftContent))
            ).getCurrentContent()
          )
        );

        const code =
          convertTtateToHTML.match(/<pre><code>(?:.*?)<\/code><\/pre>/g) || [];

        code.forEach((htmlCode: string) => {
          convertTtateToHTML = convertTtateToHTML.replace(
            htmlCode,
            entities.encode(htmlCode)
          );
        });

        return convertTtateToHTML;
      };

      return (
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>DraftEditor</h1>
          </section>

          <DraftEditor
            name="custom editor"
            placeholder="content here ..."
            autoCapitalize="words"
            value={draftContent}
            onChange={onChange}
          />

          <div dangerouslySetInnerHTML={{ __html: preview() }} />
        </div>
      );
    };
    return <Editor />;
  });
