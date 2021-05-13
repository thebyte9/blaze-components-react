import '@blaze-react/blaze-components-theme';
import { storiesOf } from '@storybook/react';
import React from 'react';
import DraftEditorReadme from '../README.md';
import { DraftEditorWrapper } from '../src';
import './index.css';
import '../styles/main.scss';

storiesOf('DraftEditor', module).addParameters({
  readme: {
    sidebar: DraftEditorReadme,
  },
});

export default {
  title: 'DraftEditor',
  component: DraftEditorWrapper,
  argTypes: {
    onChange: { action: 'onChange' },
    onCreateComponent: { action: 'onCreateComponent' },
    onDeleteComponent: { action: 'onDeleteComponent' },
    onClose: { action: 'onClose' },
    onSave: { action: 'onSave' },
  },
};

const Template = (args) => (
  <div className="story-wrapper">
    <DraftEditorWrapper {...args}></DraftEditorWrapper>
  </div>
);

export const Sample = Template.bind({});
Sample.args = {
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
    onChange: { action: 'onChange' },
    onCreateComponent: { action: 'onCreateComponent' },
    onClose: { action: 'onClose' },
    onSave: { action: 'onSave' },
    dispatch: { action: 'dispatch' },
    handleChange: { action: 'handleChange' },
    handleOnBlur: { action: 'handleOnBlur' },
    handleOnFocus: { action: 'handleOnFocus' },
    handleKeyCommand: { action: 'handleKeyCommand' },
  },
};
