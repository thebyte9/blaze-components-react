import "@blaze-react/blaze-components-theme";
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
        checked: true,
        description: "Lorem ipsum dolor.",
        id: 1,
        name: ["Multiselect option", "label longer text"],
        show: true
      },
      {
        checked: true,
        description: "Lorem ipsum dolor.",
        id: 2,
        name: "Blaze 2",
        show: true
      },
      {
        checked: true,
        description: "Lorem ipsum dolor.",
        id: 3,
        name: "Blaze 3",
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 4,
        name: "Blaze 4",
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 5,
        name: "Blaze 5",
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 6,
        name: "Blaze 6",
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 7,
        name: "Blaze 7",
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 8,
        name: "Blaze 8",
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 9,
        name: "Blaze 9",
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 10,
        name: "Blaze 10",
        show: true
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
            checked: false,
            description: "Lorem ipsum dolor.",
            id: 11,
            name: "Blaze 11",
            show: true
          },
          {
            checked: false,
            description: "Lorem ipsum dolor.",
            id: 12,
            name: "Blaze 12",
            show: true
          },
          {
            checked: false,
            description: "Lorem ipsum dolor.",
            id: 33,
            name: "Blaze 33",
            show: true
          },
          {
            checked: false,
            description: "Lorem ipsum dolor.",
            id: 44,
            name: "Blaze 4",
            show: true
          }
        ]
      });
    }, 600000);
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
        limit={10}
        getSelected={(selected: any) => {
          console.log("selected", selected);
        }}
        required
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
