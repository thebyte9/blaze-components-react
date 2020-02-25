import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import inputReadme from "../README.md";

storiesOf("MultiLevelMenu", module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    }
  })
  .add("Introduction", () => {
    const MultiLevelMenu: any = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>MultiLevelMenu</h1>
          </section>

          <MultiLevelMenu
            onChange={(val: any): void => {
              // console.log(val);
            }}
            error
          />
        </div>
      </Suspense>
    );
  });
