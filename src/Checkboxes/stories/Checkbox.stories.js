import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkboxes from '../index';

const options = [
  { label: 'Example', value: 1, id: 'one' },
  {
    label: 'I accept', value: 'accepted', required: true, id: 'two'
  },
  {
    label: 'Disabled', value: '', disabled: true, id: 'three'
  }
];

storiesOf('Components/Checkbox', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Checkboxes</h1>
        <p>
          Boxes that are checked (ticked) when activated.
          They allow you to select single values for submission in a form (or not).
        </p>
      </section>

      <hr />

      <section className="exampleSection">
        <h3>Examples</h3>
        <div className="form-field form-field--checkbox">
          <Checkboxes
            options={options}
            onChange={() => {}}
            />
        </div>

        <div>
          <pre>
            <code>
              {`
              const options = [
                  {
                    label: 'Example',
                    value: 1, id: 'one'
                  },
                  {
                    label: 'I accept',
                    value: 'accepted',
                    required: true,
                    id: 'two'
                  },
                  {
                    label: 'Disabled',
                    value: '',
                    disabled: true,
                    id: 'three'
                  }
              ];

              <Checkboxes options={options} onChange={() => {}} />`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      <p>Checkboxes can receive a number of props: options, onChange</p>
      <table>
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
            <td>options</td>
            <td>array</td>
            <td>[]</td>
            <td>The checkboxes to appear in the radio group</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>function</td>
            <td>() => {}</td>
            <td>Function which changes the currently selected checkbox</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
