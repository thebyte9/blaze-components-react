import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '../index';

storiesOf('Alert', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <h1>Simple alerts</h1>
      <Alert>Simple default alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="primary">Simple primary alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="secondary">Simple secondary alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="success">Simple success alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="warning">Simple warning alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="info">Simple info alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="light">Simple light alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="dark">Simple dark alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
    </div>
  ))
  .add('Dismissable', () => (
    <div className="component-wrapper">
      <h1>Alert + close button</h1>
      <Alert close type="primary">Simple primary alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
    </div>
  ))
  .add('With icon', () => (
    <div className="component-wrapper">
      <h1>Alert + icon</h1>
      <Alert icon="error" type="warning">Simple warning alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
    </div>
  ))
  .add('With content', () => (
    <div className="component-wrapper">
      <h1>Alert + content</h1>
      <Alert close type="light">
        <h2>Heading here</h2>
        <p>Simple primary alert - with content here lorem ipsum dolor sit amet</p>
        <hr />
        <p>Extra content here lorem ipsum dolor sit amet</p>
      </Alert>
    </div>
  ))
  .add('Styling', () => (
    <div className="component-wrapper">
      Styling
    </div>
  ))
  .add('Functionality', () => (
    <div className="component-wrapper">
      Functionality
    </div>
  ));
