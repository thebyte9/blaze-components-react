import "@blaze-react/blaze-components-theme";
import withUtils from "@blaze-react/utils";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense, useState } from "react";
import DraftEditorReadme from "../README.md";
storiesOf("DraftEditor", module)
  .addParameters({
    readme: {
      sidebar: DraftEditorReadme,
    },
  })
  .add("Introduction", (): any => {
    const Editor = withUtils(({ utils: { parseTextBlock } }: any) => {
      const [draftContent, setDraftContent] = useState(
        '{"blocks":[{"key":"ai4n8","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a4bue","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"4a0pe","text":"testing","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"IMAGE","mutability":"IMMUTABLE","data":{"src":"https://images.pexels.com/photos/2956376/pexels-photo-2956376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"}}},"imageAttributes":[{"url":"https://images.pexels.com/photos/2956376/pexels-photo-2956376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100","modifier":"mod","altText":"alt","caption":"cap","link":"link"}]}'
      );

      const onChange = ({
        event: {
          target: { value },
        },
      }: {
        event: { target: { name: string; value: string } };
      }) => {
        setDraftContent(value);
      };

      // const preview = () => {
      //   return parseTextBlock({ editor: draftContent });
      // };

      const DraftEditor: any = lazy(() => import("../src"));

      return (
        <Suspense fallback={<div>Loading...</div>}>
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

            {/* <div>{preview()}</div> */}
          </div>
        </Suspense>
      );
    });
    return <Editor />;
  });
