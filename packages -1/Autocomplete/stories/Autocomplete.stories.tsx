import { storiesOf } from "@storybook/react";
import React from "react";
import AutocompleteReadme from "../README.md";
import Autocomplete from "../src";
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
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Autocomplete</h1>

      <p>
        Autocomplete component allows users to quickly find and select one from suggested options.
      </p>

      <Autocomplete data={data} selected={() => { return; }} />
    </div>
  ));
