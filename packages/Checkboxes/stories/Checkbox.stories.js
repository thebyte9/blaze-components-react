import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkboxes from '../src';
import CheckboxesReadme from '../README.md';

const multiple = [
  {
    label: 'First',
    value: 1,
    id: 'one'
  },
  {
    label: 'Second',
    value: 2,
    id: 'two'
  },
  {
    label: 'Third',
    value: 3,
    id: 'three'
  },
  {
    label: 'Disabled',
    value: 4,
    id: 'fourth',
    disabled: true
  }
];

const single = {
  label: 'Do you agree?',
  required: true
};

storiesOf('Checkboxes', module)
  .addParameters({
    readme: {
      sidebar: CheckboxesReadme
    }
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Checkboxes</h1>
        <p>
          Boxes that are checked (ticked) when activated. They allow you to select single values for
          submission in a form (or not).
        </p>
      </section>

      <hr />

      <section className="exampleSection">
        <h3>Multiselect</h3>
        <div className="form-field form-field--checkbox">
          <Checkboxes options={multiple} onChange={() => {}} />
        </div>

        <h3>Single</h3>
        <div className="form-field form-field--checkbox">
          <Checkboxes boolean options={single} onChange={() => {}} />
        </div>
      </section>
    </div>
  ));
