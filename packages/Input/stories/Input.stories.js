import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src';
import inputReadme from '../README.md';

storiesOf('Text Inputs', module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    }
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Text Inputs</h1>
        <p>Create basic single-line text fields.</p>
      </section>

      <h4>Simple</h4>
      <Input
        label="Text input required"
        placeholder="Placeholder text"
        onChange={() => {}}
        modifier="full-width"
        required
      />

      <h4>Disabled</h4>
      <Input
        label="Text input disabled"
        placeholder="Placeholder text"
        onChange={() => {}}
        type="password"
        hideTypeToggle
        disabled
      />

      <h4>Password toggle type</h4>
      <Input
        label="Password - show hide"
        placeholder="******"
        onChange={() => {}}
        type="password"
        value="Lorem ipsum"
      />
    </div>
  ));
