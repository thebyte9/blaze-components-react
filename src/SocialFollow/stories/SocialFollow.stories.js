import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialFollow from '../index';
import SocialReadme from '../README.md';

const media = {
    facebook: 'https://www.thebyte9.com',
    twitter: 'https://www.thebyte9.com',
    pinterest: 'https://www.thebyte9.com',
    linkedIn: 'https://www.thebyte9.com',
    youtube: 'https://www.thebyte9.com',
    instagram: 'https://www.thebyte9.com'
};

storiesOf('Social Follow', module)
  .addParameters({
    readme: {
      sidebar: SocialReadme
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Social Follow</h1>

      <p>
      The Social Icons Widget displays small graphics linked to your social media accounts,
      and can be displayed on your site in different ways.
      </p>

      <h4>Share</h4>
      <SocialFollow media={media} vertical/> 

      <br />
      <br />

      <h4>Follow</h4>
      <SocialFollow media={media} type="follow"/> 
    </div>
  ))
