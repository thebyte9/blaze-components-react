import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../index';

const options = [
  { label: 'A', value: 1, id: 'one' },
  {
    label: 'B', value: 'accepted', required: true, id: 'two'
  },
  {
    label: 'Disabled', value: '', disabled: true, id: 'three'
  }
];

storiesOf('Radio Buttons', module)
  .add('Introduction', () => (
    <form>
      <div className="component-wrapper">
        <section className="introductionSection">
          <h1>Radio Buttons</h1>
          <p>
            Only one radio button in a given group can be selected at the same time.
            Radio buttons are typically rendered as small circles,
            which are filled or highlighted when selected.
          </p>
        </section>

        <hr />

        <section className="examplesSection">
          <h3>Examples</h3>
          <div>
            <RadioButton
              options={options}
              onChange={() => {}}
              />
          </div>
          <div>
          <pre>
            <code>
              {`
                const options = [
                  { label: 'A', value: 1, id: 'one' },
                  {
                    label: 'B', value: 'accepted', required: true, id: 'two'
                  },
                  {
                    label: 'Disabled', value: '', disabled: true, id: 'three'
                  }
                ];
                
                <RadioButton options={options} onChange={() => {}} />`}
            </code>
          </pre>
        </div>
        </section>
      </div>
    </form>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
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
            <td>Array of options </td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>function</td>
            <td>false</td>
            <td>Function to change currently selected button </td>
          </tr>
          <tr>
            <td>required</td>
            <td>Boolean</td>
            <td>() => {}</td>
            <td>Is a selection required?</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
