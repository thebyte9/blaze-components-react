import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import VideoContainerReadme from "../README.md";

storiesOf("Video Container", module)
  .addParameters({
    readme: {
      sidebar: VideoContainerReadme
    }
  })
  .add("Introduction", (): any => {
    const VideoContainer: any = lazy((): any => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <h1>Video Container</h1>
          <VideoContainer
            src="https://www.youtube.com/embed/sSJiZLkfsnw"
            title="lorem ipsum"
            frameborder="0"
          />
        </div>
      </Suspense>
    );
  });
