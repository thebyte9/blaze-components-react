import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

storiesOf('Button', module)
  .add('with children', () => (
    <Button><span>Button with children</span></Button>
  ))
  .add('with text', () => (
    <Button className="button">This is a button</Button>
  ));
