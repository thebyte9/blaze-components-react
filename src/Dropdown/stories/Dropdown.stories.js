import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../Dropdown';
import DropdownReadme from '../README.md';


storiesOf('Dropdown', module)
  .addParameters({
    readme: {
      sidebar: DropdownReadme
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Dropdown</h1>
      <p>Click on more icon button to toggle menu.</p>
      <hr/>
      <div style={{textAlign: 'right'}}>
      <Dropdown label="Dropdown">
        <a href="/">Settings</a>
        <a href="/">Sign out</a>
        <a href="/">Help</a>
      </Dropdown>
      </div>
    </div>
  ));
