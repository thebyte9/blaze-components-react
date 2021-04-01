import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import inputReadme from "../README.md";
import MultiLevelMenu from "../src/MultiLevelMenu";

storiesOf("MultiLevelMenu", module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    }
  })
  .add("Introduction", () => {
    return (
      <div className="component-wrapper">
        <section className="introductionSection">
          <h1>MultiLevelMenu</h1>
        </section>

        <MultiLevelMenu main={1}>
          <MultiLevelMenu.List id={1}>
            <MultiLevelMenu.Item to={4}>
              Level 1 menu to 4 >
            </MultiLevelMenu.Item>
            <MultiLevelMenu.Item to={2}>Level 1 menu</MultiLevelMenu.Item>
          </MultiLevelMenu.List>

          <MultiLevelMenu.List id={2}>
            <MultiLevelMenu.Item to={3}>Level 2 menu ></MultiLevelMenu.Item>
          </MultiLevelMenu.List>

          <MultiLevelMenu.List id={3}>
            <MultiLevelMenu.Item to={1}>
              Level 3 menu to 1 >
            </MultiLevelMenu.Item>
          </MultiLevelMenu.List>

          <MultiLevelMenu.List id={4}>
            <MultiLevelMenu.Item>Level 4 menu</MultiLevelMenu.Item>
          </MultiLevelMenu.List>
        </MultiLevelMenu>
      </div>
    );
  });
