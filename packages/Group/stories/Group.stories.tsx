import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";

storiesOf("Group", module)
  .addParameters({
    readme: {
      sidebar: ''
    }
  })
  .add("Introduction", () => {
    const Input: any = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Group components</h1>
            <p>Render basic grouping of children into a togglable jsx</p>
          </section>

          <h4>Default group</h4>
          <Input
            label="Group"
            childre="bananna"
          />
        </div>
      </Suspense>
    );
  });
