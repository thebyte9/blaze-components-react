import React from 'react';
import { storiesOf } from '@storybook/react';
import {Tab, TabItem} from '../Tab';

let data = 'loading...';

function loadData() {
    // then(data) ...
    // setData(data) ...
}

storiesOf('Tab', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <Tab selected={1}>
        <TabItem title="Basic">Basic content here</TabItem>
        <TabItem title="Advanced">Advanced content here</TabItem>
        <TabItem title="Other">Other content here</TabItem>
      </Tab>
    </div>
  ))
  .add('Load onClick', () => (
    <div className="component-wrapper">
        <Tab selected={0}>
          <TabItem title="Basic">Basic content here</TabItem>
          <TabItem title="Advanced" action={() => loadData()}>{data}</TabItem>
          <TabItem title="Other">Other content here</TabItem>
        </Tab>
    </div>
  ));
