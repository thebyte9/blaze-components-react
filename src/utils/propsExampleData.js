const propsExampleData = {
  table: {
    identification: 'id',
    columns: ['name', 'type', 'default', 'description'],
    rows: [
      {
        id: 1,
        name: 'data',
        type: 'Object',
        default: '{ }',
        description: 'An object containing table data'
      },
      {
        id: 2,
        name: 'onSelect',
        type: 'Function',
        default: '( ) => { }',
        description: 'Callback function after selecting'
      },
      {
        id: 3,
        name: 'checkboxes',
        type: 'Boolean',
        default: 'true',
        description: 'Display or hide checkboxes'
      }
    ]
  },
  tableIntroExampleData: {
    identification: 'id',
    columns: ['name', 'age'],
    rows: [{
      id: 1,
      name: 'Jane',
      age: 26,
    }, {
      id: 2,
      name: 'Lucy',
      age: 52,
    }, {
      id: 3,
      name: 'Robert',
      age: 23
    }]
  }
};

export default propsExampleData;
