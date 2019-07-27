import { storiesOf } from "@storybook/react";
import React from "react";
import moreReadme from "../README.md";
import More from "../src";
storiesOf("More", module)
  .addParameters({
    readme: {
      sidebar: moreReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <More isMoreMenu>
        <More.Avatar isMoreMenu>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content displayBg isMoreMenu>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </More.Content>
      </More>

      <More isMoreMenu>
        <More.Avatar isMoreMenu>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content displayBg isMoreMenu>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </More.Content>
      </More>
    </div>
  ));
