import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, DropdownItem } from '../Dropdown';

storiesOf('Dropdown', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <Dropdown label="Menu">
        <DropdownItem label="Home" action={() => {}} />
        <DropdownItem action={() => {}} />
      </Dropdown>
    </div>
  ));
