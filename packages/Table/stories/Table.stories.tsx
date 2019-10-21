import { storiesOf } from "@storybook/react";
import faker from "faker";
import React, { useEffect, useState } from "react";
import TableReadme from "../README.md";
import Table from "../src";

// const secondTableData = {
//   identification: "id",
//   columns: ["name", "lastName", "age", "tel"],
//   orderBy: ["age", "name"],
//   rows: [
//     {
//       id: 1,
//       name: "Oscar Leon",
//       lastName: "abc",
//       age: 26,
//       tel: "213123123"
//     },
//     {
//       id: 2,
//       name: "Ismael Haytam",
//       lastName: "def",
//       age: 23,
//       tel: "213123123"
//     },
//     {
//       id: 3,
//       name: "Robert",
//       lastName: "nop",
//       age: 45,
//       tel: "213123123"
//     }
//   ]
// };

const DemoComponent = () => {
  const [data, setData] = useState<any>({
    columns: ["name", "email"],
    identification: "id",
    orderBy: ["email", "name"],
    rows: []
  });

  const generateFakeData = () => {
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        email: faker.internet.email(),
        id: 1,
        name: faker.internet.userName()
      });
    }
    return rows;
  };

  useEffect(() => {
    if (data.rows && !data.rows.length) {
      const updatedData = { ...data, rows: generateFakeData() };
      setData(updatedData);
    }
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

      {/* <h1>Sticky scrollable table</h1>

      <p>
        We can choose to render a table with scrollable content by changing the
                prop boolean value of <code>stickyScroll</code>
      </p> */}

      {/* <Table
        stickyScroll
        checkboxes
        data={secondTableData}
        onSelect={() => ({})}
      /> */}
    </div>
  ));
