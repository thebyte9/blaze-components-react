import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../index';

const options = [
  { label: 'Example', value: 1, id: 'one' },
  {
    label: 'I accept', value: 'accepted', required: true, id: 'two'
  },
  {
    label: 'Disabled', value: '', disabled: true, id: 'three'
  }
];

storiesOf('RadioButton', module)
  .add('Simple', () => (
    <form>
      <div className="component-wrapper">
        <p className="item-heading">Checkboxes</p>
        <RadioButton
            options={options}
            onChange={() => {}}
            />
      </div>
    </form>
  ));
