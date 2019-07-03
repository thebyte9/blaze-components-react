import React from "react";
import { storiesOf } from "@storybook/react";
import Autocomplete from "../src";
import AutocompleteReadme from "../README.md";
const data = {
  keyValue: "name",
  filterBy: ["name", "description"],
  data: [
    {
      id: 1,
      name: "Laravel",
      description: "Lorem ipsum dolor."
    },
    {
      id: 2,
      name: "React",
      description: "Aliquam tincidunt."
    },
    {
      id: 3,
      name: "Adonis",
      description: "Vestibulum auctor."
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

      <Autocomplete data={data} selected={() => {}} />
    </div>
  ));
