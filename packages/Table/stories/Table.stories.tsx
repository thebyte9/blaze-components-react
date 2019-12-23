import "@blaze-react/components-styles";
import { storiesOf } from "@storybook/react";
import faker from "faker";
import React, { lazy, Suspense, useEffect, useState } from "react";
import uuid from "uuid/v1";
import TableReadme from "../README.md";

const DemoComponent = () => {
  const [data, setData] = useState<any>({
    appliedSort: { name: "asc" },
    columns: ["name", "email", "city", "zipCode"],
    identification: "id",
    orderBy: ["email", "name", "city", "zipCode"],
    rows: []
  });

  const generateFakeData = () => {
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        city: faker.address.city(),
        email: faker.internet.email(),
        id: uuid(),
        name: faker.internet.userName(),
        zipCode: faker.address.zipCode()
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
  const Table: any = lazy((): any => import("../src"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table checkboxes data={data} onSelect={() => ({})} />
    </Suspense>
  );
};

storiesOf("Table", module)
  .addParameters({
    readme: {
      sidebar: TableReadme
    }
  })
  .add("Introduction", () => {
    return (
      <div className="component-wrapper">
        <h1>Table</h1>

        <p>
          We can choose to render a table with or without row selection by
                  changing the prop boolean value of <code>checkboxes</code>
        </p>

        <h4>With Checkboxes</h4>

        <div style={{ margin: "20px", height: "100%" }}>
          <DemoComponent />
        </div>
      </div>
    );
  });
