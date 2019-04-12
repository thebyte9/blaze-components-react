import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../index';

storiesOf('Tooltip', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <h1>Tooltips</h1>
      <Tooltip text="Byte9" position="top">Tooltip on top</Tooltip>
      <hr/>
      <Tooltip text="Byte9" position="bottom">Tooltip on bottom</Tooltip>
      <hr/>
      <Tooltip text="Byte9" position="right">Tooltip on right</Tooltip>
      <hr/>
      <Tooltip text="Byte9" position="left">Tooltip on left</Tooltip>
    </div>
  ));
