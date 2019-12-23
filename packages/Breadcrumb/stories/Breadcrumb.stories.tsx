import "@blaze-react/components-styles";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import BreadcrumbsReadme from "../README.md";

storiesOf("Breadcrumbs", module)
  .addParameters({
    readme: {
      sidebar: BreadcrumbsReadme
    }
  })
  .add("Introduction", (): any => {
    const Breadcrumb = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <h1>Breadcrumbs</h1>
          <p>
            Breadcrumbs allow users to make selections from a range of values.
          </p>

          <Breadcrumb>
            <a href="?path=/story/breadcrumbs--introduction">First</a>
            <a href="?path=/story/breadcrumbs--introduction">Second</a>
            <a href="?path=/story/breadcrumbs--introduction">
              Third - long text will be truncated for a better user experience
            </a>
          </Breadcrumb>
        </div>
      </Suspense>
    );
  });
