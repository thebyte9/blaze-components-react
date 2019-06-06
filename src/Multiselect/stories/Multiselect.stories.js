import React from 'react';
import { storiesOf } from '@storybook/react';
import Multiselect from '../index';
import MultiSelectReadme from '../README.md';

const data = {
  keyValue: 'name',
  filterBy: ['name', 'description'],
  data: [
    {
        id: 1,
        name: 'Blaze',
        description: 'Lorem ipsum dolor.'
    },
    {
        id: 2,
        name: 'KP',
        description: 'Aliquam tincidunt.'
    },
    {
        id: 3,
        name: 'Pulser',
        description: 'Vestibulum auctor.'
    }
  ]
};

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
      MultiSelect is a component that allows you to select multiple items with check boxes. It is useful for labeling, contact lists, country selectors, etc.
      </p> 

    <Multiselect data={data} selected={() => {}}/>

    </div>
  ));


