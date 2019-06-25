import React from 'react';
import { storiesOf } from '@storybook/react';
import More from '../src/index';
import moreReadme from '../README.md';

storiesOf('More', module)
  .addParameters({
    readme: {
      sidebar: moreReadme
    }
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <More isMoreMenu>
        <More.Avatar isMoreMenu>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </More.Content>
      </More>
    </div>
  ));
