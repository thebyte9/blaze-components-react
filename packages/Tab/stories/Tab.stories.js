import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Tab, TabItem } from '../src';
import TabReadme from '../README.md';

storiesOf('Tab', module)
  .addParameters({
    readme: {
      sidebar: TabReadme
    }
  })
  .add('Introduction', () => {
    const Wrapper = () => {
      const [content, setContent] = useState('Loading...');

      const loadContent = () =>
        setTimeout(() => setContent('Dynamic content successfully loaded'), 2000);

      return (
        <div className="component-wrapper">
          <h1>Tab</h1>
          <p>Tabs organize a static or dynamic content across different screens.</p>
          <Tab selected={0}>
            <TabItem title="Basic">Basic content here</TabItem>
            <TabItem title="Advanced" action={loadContent}>
              {content}
            </TabItem>
            <TabItem title="Other">Other content here</TabItem>
          </Tab>
        </div>
      );
    };
    return <Wrapper />;
  });
