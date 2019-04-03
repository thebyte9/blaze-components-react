
import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../index';

const arrayOfObjects = [
  {
    id: 1,
    username: 'Oscar'
  },
  {
    id: 2,
    username: 'Ismael'
  }
];

const tableStyles = {
  width: '100%',
  textAlign: 'center'
};

storiesOf('Select Input', module)
  .add('Basic select', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--select">
          <Select
            label="Select label"
            options={['lorem', 'ipsum', 'dolor']}
            onChange={() => {}}
            required
            />
          <br />
          <Select
            label="Select label"
            selected="08001"
            options={[['08001', 'Barcelona'], ['17006', 'Madrid']]}
            onChange={() => {}}
            />
          <br />
          <Select
            label="Select label"
            selected="1"
            options={arrayOfObjects}
            keys={['id', 'username']}
            onChange={() => {}}
            />

          <br />
          <Select
            label="Select label"
            onChange={() => {}}
            />
        </div>
      </div>
    </form>
  ))
  .add('Description', () => (
    <div className="component-wrapper">
      <h1>Description</h1>
      <p>The select component represents an input that provides a number of options</p>
      <Select label="English cities" options={['London', 'Manchester', 'Liverpool']} onChange={() => {}} required />
      <pre>
        <code>
          {/* &lt;Select label=&quot;Select label&quot; options={['lorem', 'ipsum', 'dolor']}
          onChange={() =&amp;gt; {}} required /&gt; */}
        </code>
      </pre>
    </div>
  ))
  .add('Functionality', () => (
    <div className="component-wrapper">
      <table style={tableStyles}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>""</td>
            <td>Does the select input have a label?</td>
          </tr>
          <tr>
            <td>required</td>
            <td>boolean</td>
            <td>false</td>
            <td>Is this a mandatory field for the form?</td>
          </tr>
          <tr>
            <td>options</td>
            <td>array</td>
            <td>[]</td>
            <td>A string/array of options</td>
          </tr>
          <tr>
            <td>selected</td>
            <td>array</td>
            <td>null</td>
            <td>The currently selected option</td>
          </tr>
          <tr>
            <td>keys</td>
            <td>array</td>
            <td>[]</td>
            <td>A set of values and text of each option</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>function</td>
            <td>{'() => {}'}</td>
            <td>The fn to update the currently selected option</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
