import '@blaze-react/blaze-components-theme';
import { storiesOf } from '@storybook/react';
import React from 'react';
import DraftEditorReadme from '../README.md';
import { DraftEditorWrapper } from '../src';

storiesOf('DraftEditor', module).addParameters({
  readme: {
    sidebar: DraftEditorReadme,
  },
});

export default {
  title: 'DraftEditor',
  component: DraftEditorWrapper,
};

const Template = (args) => <DraftEditorWrapper {...args}></DraftEditorWrapper>;

export const Empty = Template.bind({});
Empty.args = {
  component: {
    id: 'textblock-1',
    items: null,
    settings: {
      canShowInEditorView: true,
      editor:
        '{"blocks":[{"key":"6lunu","text":"The Superyacht Directory is the world’s largest database of private luxury yachts, with over 10,000 megayachts listed. It’s the most authoritative place to find everything you need to know about superyachts – including new builds, historic vessels and the most famous boats of all time.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
      name: 'textblock-2',
      showInEditorView: true,
    },
    name: 'textblock-1',
    onChange: () => ({}),
  },
};
