import React from 'react';
import { storiesOf } from '@storybook/react';
import Progress from '../index';

const steps = ['Cart', 'Billing', 'Delivery', 'Review & pay']

storiesOf('Progress', module)
  .add('Dot indicators', () => (
    <div className="component-wrapper">
      <Progress progress={2} onChange={() => {}} steps={steps}/>
    </div>
  ))
  .add('Count indicators', () => (
    <div className="component-wrapper">
      <Progress progress={3} type="count" onChange={() => {}} steps={steps}/>
    </div>
  ))
  .add('Text indicators', () => (
    <div className="component-wrapper">
      <Progress progress={1} type="text" onChange={() => {}} steps={steps}/>
    </div>
  ));
