import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../index';

const url = 'http://lorempixel.com/400/400/people/';

storiesOf('Avatar', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <Avatar url={url} modifier="med"/>
      <Avatar url={url} username="Ismael Haytam" modifier="small"/>
    </div>
  ))
  .add('default', () => (
    <div className="component-wrapper">
      <Avatar username="Blaz 2"/>
      <Avatar username="Kongan Page" modifier="x-small"/>
    </div>
  ))
