
import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../index';

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

storiesOf('Select Input', module)
  .add('Basic select', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--select">
          <Select
            label="Select label"
            selected={null}
            options={['lorem', 'ipsum', 'dolor']}
            onChange={() => {}}
            required
            />
          <br />
          <Select
            label="Select label"
            selected="08001"
            options={[['08001', 'Barcelona'], ['17006', 'Madrid']]}
            onChange={() => {}}
            />
          <br />
          <Select
            label="Select label"
            selected="1"
            options={arrayOfObjects}
            keys={['id', 'username']}
            onChange={() => {}}
            />

          <br />
          <Select
            label="Select label"
            onChange={() => {}}
            />
        </div>
      </div>
    </form>
  ));
