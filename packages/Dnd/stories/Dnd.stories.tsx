import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import DndReadme from "../README.md";

storiesOf("DnD", module)
  .addParameters({
    readme: {
      sidebar: DndReadme
    }
  })
  .add("Introduction", (): any => {
    const DemoComponent: any = lazy((): any => import("./DemoComponent"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DemoComponent />
      </Suspense>
    );
  });
