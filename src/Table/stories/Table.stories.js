import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../index';
import propsExampleData from '../../utils/propsExampleData';
import TableReadme from '../README.md';

const data =  {
  identification: 'id',
  columns: ['name', 'age'],
  rows: [{
    id: 1,
    name: 'Oscar Leon',
    age: 26,
  }, {
    id: 2,
    name: 'Ismael Haytam',
    age: 23,
  }, {
    id: 3,
    name: 'Robert',
    age: 45
  }]
}

storiesOf('Table', module)
  .addParameters({
    readme: {
      sidebar: TableReadme
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">

      <section className="examplesSection">
        <h1>Table</h1>

        <p>
          We can choose to render a table with or without row selection
          by changing the prop boolean value of <code>checkboxes</code>
        </p>

          <h4>With Checkboxes</h4>
          
          <Table checkboxes data={data} onSelect={(selected) => console.log(selected)} />

          <br/>
          <h4>Static table</h4>

          <Table data={data} />


      
      </section>

    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      <p>Tables can receive a number of props: data, onSelect, checkboxes</p>

      <Table checkboxes={false} data={propsExampleData.table} onSelect={(selected) => console.log(selected)} />
    </div>
  ));
