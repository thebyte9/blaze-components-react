import React from 'react';
import { storiesOf } from '@storybook/react';
import {Tab, TabItem} from '../Tab';
import TabReadme from '../README.md';

storiesOf('Tab', module)
  .addParameters({
    readme: {
      sidebar: TabReadme
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Tab</h1>
      <p>Tabs organize a static or dynamic content across different screens.</p>
      <Tab selected={1}>
        <TabItem title="Basic">Basic content here</TabItem>
        <TabItem title="Advanced" action={() => {}}>Dynamic content here...</TabItem>
        <TabItem title="Other">Other content here</TabItem>
      </Tab>
    </div>
  ));
