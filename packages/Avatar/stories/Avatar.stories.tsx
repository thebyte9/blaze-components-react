import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import avatarReadme from "../README.md";
import Avatar from "../src";

const url = "http://lorempixel.com/400/400/people/";
storiesOf("Avatar", module)
  .addParameters({
    readme: {
      sidebar: avatarReadme
    }
  })
  .add("Introduction", (): any => {
    return (
      <div className="component-wrapper">
        <h1>Avatar</h1>
        <p>
          Avatar is the graphical representation of the user or the user&apos;s
          alter ego or character.
        </p>
        <h4>Image</h4>
        <Avatar url={url} modifier={Avatar.availableModifiers.med} />
        <Avatar
          url={url}
          username="Ismael Haytam"
          modifier={Avatar.availableModifiers.small}
        />

        <br />
        <br />

        <h4>User Initials</h4>
        <Avatar username="Blaz 2" modifier={Avatar.availableModifiers.med} />
        <Avatar
          username="Lorem Ipsum"
          modifier={Avatar.availableModifiers.xSmall}
        />
      </div>
    );
  });
