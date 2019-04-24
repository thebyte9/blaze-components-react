import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../index';

var data = {
  identification: 'id',
  columns: ['name', 'age'],
  rows: [{
    id: 1,
    name: 'Adam',
    age: 26,
  }, {
    id: 2,
    name: 'Oscar',
    age: 52,
  }, {
    id: 3,
    name: 'Ismael',
    age: 23
  }]
};

storiesOf('Table', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <Table data={data} onSelect={(selected) => console.log(selected)}/>
    </div>
  ));
