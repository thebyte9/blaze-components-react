import { storiesOf } from '@storybook/react';
import React from 'react';
import moreReadme from '../README.md';
import More from '../src/More';
storiesOf('More', module)
  .addParameters({
    readme: {
      sidebar: moreReadme,
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <More disabled isMoreMenu={true} onClose={() => ({})}>
        <More.Avatar isMoreMenu={true} handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </More.Content>
      </More>

      <More displayBg={true} isMoreMenu={true}>
        <More.Avatar isMoreMenu handleToggle={() => ({})}>
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
