import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import Tooltip from '@blaze-react/tooltip'
import React, { lazy, Suspense } from "react";
import AutocompleteReadme from "../README.md";

const data = {
  keyValue: "name",
  filterBy: ["name", "description"],
  data: [
    {
      id: 1,
      name: "Laravel",
      description: "PHP framework"
    },
    {
      id: 2,
      name: "React",
      description: "Javascript library"
    },
    {
      id: 3,
      name: "Adonis",
      description: "Javascript framework"
    }
  ]
};
storiesOf("Autocomplete", module)
  .addParameters({
    readme: {
      sidebar: AutocompleteReadme
    }
  })
  .add("Introduction", (): any => {

    const tooltip = (<Tooltip tooltipContent={<> tooltip on <em>click</em></>} trigger="click" />)

    const Autocomplete: any = lazy((): any => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <h1>Autocomplete</h1>

          <p>
            Autocomplete component allows users to quickly find and select one
            from suggested options.
          </p>

          <Autocomplete
            data={data}
            label="Autocomplete"
            tooltip={tooltip}
            selected={() => {
              return;
            }}
          />
        </div>
      </Suspense>
    );
  });