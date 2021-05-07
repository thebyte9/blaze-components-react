import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import DraftEditorReadme from "../README.md";
import DraftEditorWrapper from "../src";

storiesOf("DraftEditor", module)
  .addParameters({
    readme: {
      sidebar: DraftEditorReadme,
    },
  })

export default {
  title: 'DraftEditor',
  component: DraftEditorWrapper,
}

const Template = (args) => <DraftEditorWrapper {...args}></DraftEditorWrapper>;

export const Empty = Template.bind({});
Empty.args = {
  component: {
    id: "textblock-1",
    items: null,
    name: "textblock-1",
    onChange: () => ({})
  }
};

