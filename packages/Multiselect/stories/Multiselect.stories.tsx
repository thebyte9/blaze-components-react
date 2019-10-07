import { storiesOf } from "@storybook/react";
import React, { useEffect, useState } from "react";
import MultiSelectReadme from "../README.md";
import Multiselect from "../src";

const DemoComponent = () => {
  const [multiselectData, setMultiselectData] = useState({
    filterBy: ["name", "description"],
    identification: "id",
    keyValue: "name",
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
        name: "Blaze 3",
        description: "Lorem ipsum dolor."
      },
      {
        id: 4,
        name: "Blaze 4",
        description: "Lorem ipsum dolor."
      },
      {
        id: 5,
        name: "Blaze 5",
        description: "Lorem ipsum dolor."
      },
      {
        id: 6,
        name: "Blaze 6",
        description: "Lorem ipsum dolor."
      },
      {
        id: 7,
        name: "Blaze 7",
        description: "Lorem ipsum dolor."
      },
      {
        id: 8,
        name: "Blaze 8",
        description: "Lorem ipsum dolor."
      },
      {
        id: 9,
        name: "Blaze 9",
        description: "Lorem ipsum dolor."
      },
      {
        id: 10,
        name: "Blaze 10",
        description: "Lorem ipsum dolor."
      }
    ]
  });
  const [isTimeoutRegistered, setIsTimeoutRegistered] = useState(false);

  const registerSetTimeOut = () => {
    setTimeout(() => {
      setMultiselectData({
        filterBy: ["name", "id"],
        identification: "id",
        keyValue: "name",
        data: [
          {
            id: 1,
            name: "Blaze 11",
            description: "Lorem ipsum dolor."
          },
          {
            id: 2,
            name: "Blaze 22",
            description: "Lorem ipsum dolor."
          },
          {
            id: 3,
            name: "Blaze 33",
            description: "Lorem ipsum dolor."
          },
          {
            id: 4,
            name: "Blaze 44",
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
        label="Multi Select"
        limit={3}
        selected={[
          {
            id: 3,
            name: "Blaze 1",
            description: "Lorem ipsum dolor.",
            checked: true
          },
          {
            id: 4,
            name: "Blaze 2",
            description: "Lorem ipsum dolor.",
            checked: true
          }
        ]}
        getSelected={(selected: any) => {
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
