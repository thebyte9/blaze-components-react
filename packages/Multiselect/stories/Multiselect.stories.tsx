import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import MultiSelectReadme from "../README.md";
import Multiselect from "../src";



storiesOf("Multiselect", module)
  .addParameters({
    readme: {
      sidebar: MultiSelectReadme
    }
  })
  .add("Static data", () => {
    const multiselectData = {
      filterBy: ["name", "description"],
      identification: "id",
      keyValue: "name",
      data: [...new Array(10)].map((e, index) => ({
        checked: index % 50 === 0,
        description: faker.random.word(),
        id: faker.random.uuid(),
        name: faker.name.findName(),
        show: true
      }))
    };
    return (
      <div className="component-wrapper">
        <h1>Multiselect</h1>
        <p>
          MultiSelect is a component that allows you to select multiple items with
          check boxes. It is useful for labeling, contact lists, country
          selectors, etc.
      </p>
        <Multiselect
          isStatic
          name="multiselect"
          data={multiselectData}
          label="Multi Select"
          limit={90}
          getSelected={(selected: any) => {
            console.log("selected", selected);
          }}
          required
        />
      </div>
    );
  })
  .add("Dynamic data", () => {
    const firstBatch = [...new Array(20)].map((e, index) => ({
      checked: index % 50 === 0,
      description: faker.random.word(),
      id: faker.random.uuid(),
      name: faker.name.findName(),
      show: true
    }))
    const multiselectData = {
      filterBy: ["name", "description"],
      identification: "id",
      keyValue: "name",
      data: firstBatch
    };
    return (
      <div className="component-wrapper">
        <h1>Multiselect</h1>
        <p>
          MultiSelect is a component that allows you to select multiple items with
          check boxes. It is useful for labeling, contact lists, country
          selectors, etc.
      </p>
        <Multiselect
          name="multiselect"
          data={multiselectData}
          label="Multi Select"
          limit={90}
          getSelected={(selected: any) => {
            console.log("selected", selected);
          }}
          required
        />
      </div>
    );;
  });
