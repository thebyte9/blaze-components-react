import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../src';

import selectReadme from '../README.md';

const arrayOfObjects = [
  {
    id: 1,
    username: 'Oscar'
  },
  {
    id: 2,
    username: 'Ismael'
  }
];

storiesOf('Select', module)
  .addParameters({
    readme: {
      sidebar: selectReadme
    }
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Select inputs</h1>
        <p>The select component represents an input that provides a menu of options.</p>
      </section>

      <hr />

      <section className="exampleSection">
        <div className="form-field form-field--select">
          <h4>Array of options</h4>
          <Select
            label="Select a city"
            options={['London', 'Paris', 'Munich']}
            onChange={() => {}}
            required
          />
          <br />
          <br />

          <h4>Multidimensional Array of options</h4>
          <Select
            label="Select label"
            selected="08001"
            options={[['08001', 'Barcelona'], ['17006', 'Madrid']]}
            onChange={() => {}}
          />
          <br />
          <br />

          <h4>Array of objects</h4>
          <Select
            label="Select user"
            selected="1"
            options={arrayOfObjects}
            keys={['id', 'username']}
            onChange={() => {}}
          />
          <br />
          <br />

          <h4>By default is disabled if none options</h4>
          <Select label="Disabled" onChange={() => {}} options={[]} />
        </div>
      </section>
    </div>
  ));
