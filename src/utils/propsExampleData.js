const propsExampleData = {
  avatar: {
    identification: 'id',
    columns: ['name', 'type', 'default', 'description'],
    rows: [
      {
        id: 1,
        name: 'modifer',
        type: 'string',
        default: '" "',
        description: 'The modifier to be used to adjust the size'
      },
      {
        id: 2,
        name: 'url',
        type: 'string',
        default: '" "',
        description: 'The image source url'
      },
      {
        id: 3,
        name: 'username',
        type: 'string',
        default: '!',
        description: 'The username used to create the initials'
      }
    ]
  },
};

export default propsExampleData;
