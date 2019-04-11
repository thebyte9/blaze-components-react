import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkboxes from '../index';

const options = [
  { label: 'Example', value: 1, id: 'one' },
  {
    label: 'I accept', value: 'accepted', required: true, id: 'two'
  },
  {
    label: 'Disabled', value: '', disabled: true, id: 'three'
  }
];

storiesOf('Checkbox', module)
  .add('Simple', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--checkbox">
          <Checkboxes
            options={options}
            onChange={() => {}}
            />
        </div>
      </div>
    </form>
  ));
