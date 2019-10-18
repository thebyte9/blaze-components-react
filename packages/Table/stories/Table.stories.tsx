import { storiesOf } from "@storybook/react";
import React, { useEffect, useState } from "react";
import TableReadme from "../README.md";
import Table from "../src";

const initialData = {
  columns: ["name", "age"],
  identification: "id",
  orderBy: ["age", "name"],
  rows: [
    {
      id: 1,
      name: "Oscar Leon",
      age: 26
    },
    {
      id: 2,
      name: "Ismael Haytam",
      age: 23
    },
    {
      id: 3,
      name: "Admin",
      age: 45
    }
  ]
};

const finalData = {
  identification: "id",
  columns: ["name", "lastName", "age", "tel"],
  orderBy: ["age", "name"],
  rows: [
    {
      id: 1,
      name: "Oscar Leon",
      lastName: "abc",
      age: 26,
      tel: "213123123"
    },
    {
      id: 2,
      name: "Ismael Haytam",
      lastName: "def",
      age: 23,
      tel: "213123123"
    },
    {
      id: 3,
      name: "Robert",
      lastName: "nop",
      age: 45,
      tel: "213123123"
    }
  ]
};

const DemoComponent = () => {
  const [data, setData] = useState<any>(initialData);

  useEffect(() => {
    setTimeout(() => {
      setData(finalData);
    }, 2000);
  }, []);

  return <Table checkboxes data={data} onSelect={() => ({})} />;
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
        We can choose to render a table with or without row selection by
                changing the prop boolean value of <code>checkboxes</code>
      </p>

      <h4>With Checkboxes</h4>

      <DemoComponent />

      <h1>Sticky scrollable table</h1>

      <p>
        We can choose to render a table with scrollable content by changing the
                prop boolean value of <code>stickyScroll</code>
      </p>

      <Table stickyScroll checkboxes data={finalData} onSelect={() => ({})} />
    </div>
  ));
