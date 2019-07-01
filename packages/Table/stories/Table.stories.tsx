import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "../src";
import TableReadme from "../README.md";
const data = {
  identification: "id",
  columns: ["name", "age"],
  rows: [
    {
      id: 1,
      name: "Oscar Leon",
      age: 26
    },
    {
      id: 2,
      name: "Ismael Haytam",
      age: 23
    },
    {
      id: 3,
      name: "Robert",
      age: 45
    }
  ]
};
storiesOf("Table", module)
  .addParameters({
    readme: {
      sidebar: TableReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Table</h1>

      <p>
        We can choose to render a table with or without row selection by
        changing the prop boolean value of <code>checkboxes</code>
      </p>

      <h4>With Checkboxes</h4>

      <Table checkboxes data={data} onSelect={() => {}} />

      <br />
      <h4>Static table</h4>

      <Table data={data} onSelect={() => {}} />
    </div>
  ));
