
import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../index';

storiesOf('Select Input', module)
  .add('Basic select', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--select">
          <Select
            label="Select label"
            options={['lorem', 'ipsum', 'dolor']}
            onChange={() => {}}
            />
        </div>
      </div>
    </form>
  ));
