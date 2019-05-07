import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../index';
import avatarReadme from '../README.md';

const url = 'http://lorempixel.com/400/400/people/';

storiesOf('Avatar', module)
.addParameters({
  readme: {
    sidebar: avatarReadme
  },
})
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Avatar</h1>
      <p>Avatar is the graphical representation of the user or the user's alter ego or character.</p>
      <h4>Image</h4>
      <Avatar url={url} modifier="med"/>
      <Avatar url={url} username="Ismael Haytam" modifier="small"/>

      <br/>
      <br/>

      <h4>User Initials</h4>
      <Avatar username="Blaz 2"/>
      <Avatar username="Kongan Page" modifier="x-small"/>
    </div>
  ));
