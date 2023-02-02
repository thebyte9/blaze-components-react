import "@blaze-react/blaze-components-theme";

import CodeEditor from '../src/CodeEditor';
import CodeEditorReadme from "../README.md";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("CodeEditor", module)
  .addParameters({
    readme: {
      sidebar: CodeEditorReadme,
    },
  })
  .add("Introduction", () => {
    return (
        <div className="component-wapper">
          <h1>CodeEditor</h1>

          <CodeEditor value="" onChange={() => ({})} />
        </div>
    );
  });
