import '@blaze-react/blaze-components-theme';
import { storiesOf } from '@storybook/react';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import TableReadme from '../README.md';
import Pagination from '@blaze-react/pagination';

const Table: any = lazy((): any => import('../src/Table'));

const DemoComponent = () => {
  const [pagination, setPagination] = useState({
    itemsPerPage: 5,
    visiblePages: 10,
    currentPage: 1
  })

  const [data, setData] = useState<any>({
    appliedSort: { name: 'asc' },
    columns: ['name', 'email', 'city'],
    identification: 'id',
    orderBy: ['email', 'name', 'city'],
    rows: [],
    labels: { name: 'Name', email: 'email', city: 'City' },
  });

  const generateFakeData = () => {
    const rows = [];
    for (let i = 1; i < 75; i++) {
      rows.push({
        city: `city ${i}`,
        email: `email${i}@byte9.com`,
        id: nanoid(),
        name: `name ${i}`,
      });
    }
    return rows;
  };

  useEffect(() => {
    if (!data.rows.length) {
      const updatedData = { ...data, rows: generateFakeData() };
      setData(updatedData);
    }
  }, []);

  const totalPages = Math.round(data.rows.length / pagination.itemsPerPage);

  const getTableData = () => {
    const indexOfLastTodo = pagination.currentPage * pagination.itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - pagination.itemsPerPage;
    return {
      ...data,
      rows: data.rows.slice(indexOfFirstTodo, indexOfLastTodo)
    }
  };


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table checkboxes data={getTableData()} onSelect={() => ({})} tableBodyHeight={400} />
      <Pagination
        totalPages={totalPages}
        onPageChange={(page: { pageNumber: number, itemsPerPage: number }) => {
          console.log(page)
          setPagination({ ...pagination, itemsPerPage: page.itemsPerPage, currentPage: page.pageNumber })
        }}
        {...pagination}
      />
    </Suspense>
  );
};



const SpaceXDemoComponent = () => {
  const [pagination, setPagination] = useState({
    itemsPerPage: 10,
    visiblePages: 10,
    currentPage: 1
  });

  const [data, setData] = useState<any>({
    columns: ['mission_name', 'launch_year'],
    labels: { mission_name: 'Name', launch_year: 'Year' },
    rows: [],
  });

  useEffect(() => {
    fetchData();
  }, [pagination.currentPage]);

  const fetchData = async () => {
    try {
      const offset = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=${pagination.itemsPerPage}&offset=${offset}`);
      const jsonData = await response.json();
      console.log(jsonData)
      setData({ ...data, rows: jsonData });
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const totalItems = 111; // api count

  const totalPages = Math.ceil(totalItems / pagination.itemsPerPage);

  const getTableData = () => {
    return {
      ...data
    };
  };

  console.log(getTableData())
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table checkboxes data={getTableData()} onSelect={() => ({})} tableBodyHeight={400} />
      <Pagination
        totalPages={totalPages}
        onPageChange={(page: { pageNumber: number, itemsPerPage: number }) => {
          setPagination({ ...pagination, itemsPerPage: page.itemsPerPage, currentPage: page.pageNumber })
        }}
        {...pagination}
      />
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
  })
  .add('SpaceX API Demo', () => {
    return (
      <div className="component-wrapper">
        <h1>SpaceX Data Table with Offset Pagination</h1>
        <div style={{ margin: '20px', height: '100%' }}>
          <SpaceXDemoComponent />
        </div>
      </div>
    );
  });
