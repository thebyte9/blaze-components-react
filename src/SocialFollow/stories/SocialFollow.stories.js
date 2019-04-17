import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialFollow from '../index';

const media = {
    facebook: 'https://www.thebyte9.com',
    twitter: 'https://www.thebyte9.com',
    pinterest: 'https://www.thebyte9.com',
    LinkedIn: 'https://www.thebyte9.com',
    youtube: 'https://www.thebyte9.com',
    instagram: 'https://www.thebyte9.com'
}

storiesOf('Social Follow', module)
  .add('Social share', () => (
    <div className="component-wrapper">
      <SocialFollow media={media} vertical title="Share..."/> 
    </div>
  ))
  .add('Social follow', () => (
    <div className="component-wrapper">
      <SocialFollow media={media} type="follow" title="Follow..."/> 
    </div>
  ));
