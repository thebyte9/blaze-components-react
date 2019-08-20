import { storiesOf } from "@storybook/react";
import React, { useEffect, useState } from "react";
import MultiSelectReadme from "../README.md";
import Multiselect from "../src";

const DemoComponent = () => {
  const [multiselectData, setMultiselectData] = useState({
    keyValue: "name",
    filterBy: ["name", "description"],
    data: [
      {
        id: 1,
        name: "Blaze 1",
        description: "Lorem ipsum dolor."
      },
      {
        id: 2,
        name: "Blaze 2",
        description: "Lorem ipsum dolor."
      },
      {
        id: 3,
        name: "Blaze",
        description: "Lorem ipsum dolor."
      },
      {
        id: 4,
        name: "Blaze",
        description: "Lorem ipsum dolor."
      },
      {
        id: 5,
        name: "Blaze",
        description: "Lorem ipsum dolor."
      }
    ]
  });
  const [isTimeoutRegistered, setIsTimeoutRegistered] = useState(false);

  const registerSetTimeOut = () => {
    setTimeout(() => {
      setMultiselectData({
        keyValue: "name",
        filterBy: ["name", "id"],
        data: [
          {
            id: 1,
            name: "Blaze",
            description: "Lorem ipsum dolor."
          },
          {
            id: 1,
            name: "Blaze",
            description: "Lorem ipsum dolor."
          },
          {
            id: 1,
            name: "Blaze",
            description: "Lorem ipsum dolor."
          },
          {
            id: 1,
            name: "Blaze",
            description: "Lorem ipsum dolor."
          }
        ]
      });
    }, 3000);
  };

  useEffect(() => {
    if (!isTimeoutRegistered) {
      setIsTimeoutRegistered(true);
      registerSetTimeOut();
    }
  }, [multiselectData]);

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
        selected={[
          {
            id: 1,
            name: "Blaze 1",
            description: "Lorem ipsum dolor.",
            checked: true
          },
          {
            id: 2,
            name: "Blaze 2",
            description: "Lorem ipsum dolor.",
            checked: true
          }
        ]}
        getSelected={selected => {
          console.log("selected", selected);
        }}
      />
    </div>
  );
};

storiesOf("Multiselect", module)
  .addParameters({
    readme: {
      sidebar: MultiSelectReadme
    }
  })
  .add("Introduction", () => {
    return <DemoComponent />;
  });
