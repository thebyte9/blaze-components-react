import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '../index';

storiesOf('Textarea', module)
  .add('Simple', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--textarea">
          <Textarea
            label="Simple extarea"
            placeholder="Content..."
            onChange={() => {}}
            required
            />
        </div>
      </div>
    </form>
  ))
  .add('Limit', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--textarea form-field--full-width">
          <Textarea
            label="Textarea with limit"
            placeholder="Content..."
            onChange={() => {}}
            limit={40}
            />
        </div>
      </div>
    </form>
  ));
