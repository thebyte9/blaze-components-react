import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import faker from "faker";
import React, { useState, useEffect } from "react";
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
      data: [...new Array(20)].map((e, index) => ({
        checked: index % 50 === 0,
        description: faker.random.word(),
        id: faker.random.uuid(),
        name: [
          faker.name.findName(),
          [faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName()]
        ],
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
    const DemoComponent = () => {
      const [list, setList] = useState<any>({
        filterBy: [],
        identification: "",
        keyValue: "",
        data: []
      })
      const random = () => [...new Array(40)].map((e, index) => ({
        checked: index % 50 === 0,
        description: faker.random.word(),
        id: faker.random.uuid(),
        name: faker.name.findName(),
        show: true
      }))

      useEffect(() => {
        const multiselectData = {
          filterBy: ["name", "description"],
          identification: "id",
          keyValue: "name",
          data: random()
        };

        setList(multiselectData)
      }, [])

      const onItemsRendered = async () => {
        setList({
          ...list, data: [...list.data, random()]
        })
      }

      const handleChange = (change: any) => {
        change.clearList()
        console.log('cleared')
        setList({
          ...list, data: random()
        })
      }

      return (
        <div className="component-wrapper">
          <h1>Multiselect</h1>
          <p>
            MultiSelect is a component that allows you to select multiple items with
            check boxes. It is useful for labeling, contact lists, country
            selectors, etc.
      </p>
          <Multiselect
            onChange={handleChange}
            isDynamic
            onItemsRendered={onItemsRendered}
            name="multiselect"
            data={list}
            label="Multi Select"
            limit={10}
            getSelected={(selected: any) => {
              console.log("selected", selected);
            }}
            required
          />
        </div>
      );
    }
    return <DemoComponent></DemoComponent>
  }
  );
