import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import TextareaReadme from "../README.md";
import Tooltip from '@blaze-react/tooltip'


storiesOf("Textareas", module)
  .addParameters({
    readme: {
      sidebar: TextareaReadme
    }
  })
  .add("Introduction", () => {

    const tooltip = (<Tooltip tooltipContent={<> tooltip on <em>click</em></>} trigger="click" />)

    const Textarea: any = lazy((): any => import("../src/TextArea"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <h1>Textarea</h1>

          <p>
            Textareas may be expanded or contracted and have a limit of
            characters
          </p>

          <h4>Simple</h4>

          <Textarea
            label="Textarea required"
            placeholder="Content..."
            onChange={() => { }}
            required
          />

          <br />
          <br />
          <h4>Limited</h4>

          <Textarea
            label="Textarea with max content length 40"
            placeholder="Content..."
            value="lorem ipsum"
            tooltip={tooltip}
            onChange={() => { }}
            limit={40}
          />
        </div>
      </Suspense>
    );
  });
