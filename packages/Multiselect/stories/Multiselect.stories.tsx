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
        name: "Blaze",
        description: "Lorem ipsum dolor."
      }
    ]
  });
  const [a, setA] = useState(false);

  const registerSetTimeOut = () => {
    setTimeout(() => {
      console.log("TIMEOUT");
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
    if (!a) {
      setA(true);
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

      <Multiselect data={multiselectData} selected={() => {}} />
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
