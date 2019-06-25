import React from 'react';
import { storiesOf } from '@storybook/react';
import VideoContainer from '../src/index';

storiesOf('Video Container', module).add('Simple', () => (
  <div className="component-wrapper">
    <VideoContainer
      src="https://www.youtube.com/embed/sSJiZLkfsnw"
      frameborder="0"
      title="lorem ipsum"
    />
  </div>
));
