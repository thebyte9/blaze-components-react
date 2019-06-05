import React from 'react';
import { storiesOf } from '@storybook/react';
import Multiselect from '../index';
import MultiSelectReadme from '../README.md';

const data = [
    {
        id: 1,
        name: 'Blaze'
    },
    {
        id: 2,
        name: 'KP'
    },
    {
        id: 3,
        name: 'Pulser'
    }
]

storiesOf('Multiselect', module)
  .addParameters({
    readme: {
      sidebar: MultiSelectReadme
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Multiselect</h1>

      <p>
      A modal dialog is a dialog that appears at the top of the main content. 
      Use a modal for dialog boxes, forms, confirmation messages or other content that can be accessed.
      </p> 

    <Multiselect data={[data, 'name']} keys={['name']} s={() => {}}/>

    </div>
  ));


