import React from "react";
import { storiesOf } from "@storybook/react";
import VideoContainer from "../src";
import VideoContainerReadme from "../README.md";
storiesOf("Video Container", module)
  .addParameters({
    readme: {
      sidebar: VideoContainerReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Video Container</h1>
      <VideoContainer
        src="https://www.youtube.com/embed/sSJiZLkfsnw"
        title="lorem ipsum"
        frameborder="0"
      />
    </div>
  ));
