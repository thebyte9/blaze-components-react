import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';
import inputReadme from '../README.md'


storiesOf('Text Inputs', module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Text Inputs</h1>
        <p>Create basic single-line text fields.</p>
      </section>

      <h4>Simple</h4>
      <div className="form-field form-field--input">
        <Input
          label="Text input required"
          placeholder="Placeholder text"
          onChange={() => {}}
          required
          />
      </div>

      <h4>Disabled</h4>
      <div className="form-field form-field--input">
        <Input
          label="Text input disabled"
          placeholder="Placeholder text"
          onChange={() => {}}
          type="password"
          hideTypeToggle
          disabled
          />
      </div>

      <h4>Password toggle type</h4>
      <div className="form-field form-field--input">
        <Input
          label="Password - show hide"
          placeholder="******"
          onChange={() => {}}
          type="password"
          value="Lorem ipsum"
          />
      </div>
    </div>
  ));
