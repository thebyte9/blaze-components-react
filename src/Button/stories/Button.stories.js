import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

storiesOf('Button', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <h1>Simple button with click event</h1>
      <Button
        className="button"
        onClick={() => {}}>
        Click
      </Button>
    </div>
  ))
  .add('Submit button', () => (
    <form onSubmit={() => {}} className="component-wrapper">
      <h1>Button inside form</h1>
      <Button
        className="button"
        isSubmit>
        <span>Submit</span>
      </Button>
    </form>
  ))
  .add('Disabled', () => (
    <div className="component-wrapper">
      <h1>Disabled button</h1>
      <Button
        className="button button--disabled"
        onClick={() => {}}
        disabled>
        Disabled
      </Button>
    </div>
  ));
