import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import CodeEditorReadme from "../README.md";

storiesOf("CodeEditor", module)
  .addParameters({
    readme: {
      sidebar: CodeEditorReadme,
    },
  })
  .add("Introduction", () => {
    const CodeEditor: any = lazy((): any => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wapper">
          <h1>CodeEditor</h1>

          <CodeEditor value="" onChange={() => ({})} />
        </div>
      </Suspense>
    );
  });
