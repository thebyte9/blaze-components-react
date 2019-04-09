import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../index';

 storiesOf('Breadcrumb', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <h1>Breadcrumb</h1>
      <Breadcrumb>
        <a href="?path=/story/breadcrumb--simple">First</a>
        <a href="?path=/story/breadcrumb--simple">Second</a>
        <a href="?path=/story/breadcrumb--simple">Third - long text will be truncated for a better user experience</a>
      </Breadcrumb>
    </div>
  ));