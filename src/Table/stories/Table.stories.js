import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../index';
import propsExampleData from '../../utils/propsExampleData';

storiesOf('Table', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Table</h1>
        <p>
          The HTML table element represents tabular data — that is,
          information presented in a two-dimensional table comprised
          of rows and columns of cells containing data.
        </p>
      </section>

      <hr />

      <section className="examplesSection">
        <p>Suppose we've got the following data available to us</p>
        <div>
          <pre>
            <code>
              {
                `
                const exampleData = {
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
                };`
              }
            </code>
          </pre>
        </div>
        <p>
          We can choose to render a table with or without row selection
          by changing the boolean value of <code>hasCheckboxes</code>
        </p>
        <div>
          <h3>Example 1</h3>
          <Table checkboxes={false} data={propsExampleData.tableIntroExampleData} onSelect={(selected) => console.log(selected)} />
          <div>
            <pre>
              <code>
                {
                  `
                    <Table
                      hasCheckboxes={false}
                      data={exampleData}
                      onSelect={(selected) => console.log(selected)}
                    />`
                }
              </code>
            </pre>
          </div>
          <br />
          <h3>Example 2</h3>
          <Table data={propsExampleData.tableIntroExampleData} onSelect={(selected) => console.log(selected)} />
          <div>
            <pre>
              <code>
                {
                  `
                    <Table
                      data={exampleData}
                      onSelect={(selected) => console.log(selected)}
                    />`
                }
              </code>
            </pre>
          </div>
        </div>
      
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
