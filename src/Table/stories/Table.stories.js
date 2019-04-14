import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../index';

var tableData = {
  identification: 'id',
  columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
  rows: [{
    id: 1,
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    id: 2,
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    id: 3,
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    id: 4,
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }]
};

storiesOf('Table', module)
  .add('Simple', () => (
    <div className="component-wrapper">
      <Table data = {tableData} onSelect={(selected) => console.log(selected)}/>
    </div>
  ));
