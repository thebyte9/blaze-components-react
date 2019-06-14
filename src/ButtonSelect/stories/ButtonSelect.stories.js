import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonSelect from '../ButtonSelect';
import ButtonSelectReadme from '../README.md';
import Button from '../../Button';

const buttonStyles = {
    border: 0,
    borderRadius: 0
  };

storiesOf('ButtonSelect', module)
  .addParameters({
    readme: {
      sidebar: ButtonSelectReadme
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>ButtonSelect</h1>
      <p>The ButtonSelect component extends the button to show a list of actions.</p>
      <ButtonSelect text="Actions">
        <Button modifiers="plain full-width" style={buttonStyles}>Settings</Button>
        <Button modifiers="plain full-width" style={buttonStyles}>Sign out</Button>
        <Button modifiers="plain full-width" style={buttonStyles}>Help</Button>
      </ButtonSelect>
    </div>
  ));
