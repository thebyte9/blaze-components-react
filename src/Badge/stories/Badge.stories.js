import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '../index';

storiesOf('Badge', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <h1>Simple badges</h1>
      <Badge type="primary">Badge</Badge> &nbsp;
      <Badge type="secondary" link>link</Badge> 
    </div>
  ))
  .add('Rounded', () => (
    <div className="component-wrapper">
      <h1>Rounded badges</h1>
      <Badge type="alert" round>10</Badge> &nbsp;
      <Badge type="info" pill link to="https://www.thebyte9.com/">Link to byte9</Badge>
    </div>
  ))
