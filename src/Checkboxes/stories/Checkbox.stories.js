import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkboxes from '../index';

const options = [
  { label: 'Example', value: 1 },
  { label: 'I accept', value: 'accepted', required: true },
  { label: 'Disabled', value: '', disabled: true }
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
