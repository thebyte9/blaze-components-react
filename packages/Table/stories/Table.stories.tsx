import '@blaze-react/blaze-components-theme';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import TableReadme from '../README.md';

const DemoComponent = () => {
  const [data, setData] = useState<any>({
    appliedSort: { name: 'asc' },
    columns: ['name', 'email'],
    identification: 'id',
    orderBy: ['email', 'name'],
    rows: [],
    labels: { name: 'Name', email: 'email'},
  });

  const generateFakeData = () => {
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        email: faker.internet.email(),
        id: nanoid(),
        name: faker.internet.userName(),
      });
    }
    return rows;
  };

  useEffect(() => {
    if (data.rows && !data.rows.length) {
      const updatedData = { ...data, rows: generateFakeData() };
      setData(updatedData);
    }
  }, []);
  const Table: any = lazy((): any => import('../src/Table'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table checkboxes data={data} onSelect={() => ({})} />
    </Suspense>
  );
};

storiesOf('Table', module)
  .addParameters({
    readme: {
      sidebar: TableReadme,
    },
  })
  .add('Introduction', () => {
    return (
      <div className="component-wrapper">
        <h1>Table</h1>

        <p>
          We can choose to render a table with or without row selection by         changing the prop boolean value of 
          <code>checkboxes</code>
        </p>

        <h4>With Checkboxes</h4>

        <div style={{ margin: '20px', height: '100%' }}>
          <DemoComponent />
        </div>
      </div>
    );
  });
