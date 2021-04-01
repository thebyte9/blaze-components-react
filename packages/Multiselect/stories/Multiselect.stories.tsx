import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import faker from "faker";
import React, { useEffect, useState } from "react";
import MultiSelectReadme from "../README.md";
import Multiselect from "../src/MultiSelect";

storiesOf("Multiselect", module)
  .addParameters({
    readme: {
      sidebar: MultiSelectReadme,
    },
  })
  .add("Static data", () => {
    const DemoComponent = () => {
      const state = {
        data: [...new Array(10)].map((e, index) => ({
          checked: false,
          description: faker.random.word(),
          id: faker.random.uuid(),
          name: [
            faker.name.findName(),
            [
              faker.name.findName(),
              faker.name.findName(),
              faker.name.findName(),
              faker.name.findName(),
            ],
          ],
          show: true,
        })),
        filterBy: ["name", "description"],
        identification: "id",
        keyValue: "name",
      };

      return (
        <div className="component-wrapper">
          <h1>Multiselect</h1>
          <p>
            MultiSelect is a component that allows you to select multiple items
            with check boxes. It is useful for labeling, contact lists, country
            selectors, etc.
          </p>
          <Multiselect
            searchTerm="al"
            name="multiselect"
            data={state}
            label="Multi Select"
            limit={1}
            getSelected={(selected: any) => {
              // setState({ ...state, data });
            }}
            required
          />
        </div>
      );
    };
    return <DemoComponent></DemoComponent>;
  })
  .add("Dynamic data", () => {
    const DemoComponent = () => {
      const [list, setList] = useState<any>({
        filterBy: [],
        identification: "",
        keyValue: "",
        data: [],
      });
      const random = (quantity: number) =>
        [...new Array(quantity)].map((e, index) => ({
          checked: index % 50 === 0,
          description: faker.random.word(),
          id: faker.random.uuid(),
          name: faker.name.findName(),
          show: true,
        }));

      useEffect(() => {
        const multiselectData = {
          filterBy: ["name", "description"],
          identification: "id",
          keyValue: "name",
          data: random(20),
        };

        setList(multiselectData);
      }, []);

      const handleChange = (change: any) => {
        change.clearList();
        setList({
          ...list,
          data: random(40),
        });
      };

      return (
        <div className="component-wrapper">
          <h1>Multiselect</h1>
          <p>
            MultiSelect is a component that allows you to select multiple items
            with check boxes. It is useful for labeling, contact lists, country
            selectors, etc.
          </p>
          <Multiselect
            onChange={handleChange}
            isDynamic
            name="multiselect"
            data={list}
            label="Multi Select"
            limit={10}
            getSelected={(selected: any) => {
              console.log("selected", selected); //eslint-disable-line
            }}
            required
          />
        </div>
      );
    };
    return <DemoComponent></DemoComponent>;
  });
