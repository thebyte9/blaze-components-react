import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '../index';

const tableStyles = {
  width: '100%',
  textAlign: 'center'
};

storiesOf('Textarea', module)
  .add('Description', () => (
    <div className="component-wrapper">
      <h1>Description</h1>
    </div>
  ))
  .add('Simple', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--textarea">
          <Textarea
            label="Simple extarea"
            placeholder="Content..."
            onChange={() => {}}
            required
            />
        </div>
      </div>
    </form>
  ))
  .add('Limit', () => (
    <form>
      <div className="component-wrapper">
        <div className="form-field form-field--textarea form-field--full-width">
          <Textarea
            label="Textarea with limit"
            placeholder="Content..."
            onChange={() => {}}
            limit={40}
            />
        </div>
      </div>
    </form>
  ))
  .add('Styling', () => (
    <div className="component-wrapper">
      Styling
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
            <td>''</td>
            <td>Does the textarea have a label?</td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>''</td>
            <td>Current value of the textarea</td>
          </tr>
          <tr>
            <td>required</td>
            <td>boolean</td>
            <td>false</td>
            <td>Is this a required field in the form?</td>
          </tr>
          <tr>
            <td>limit</td>
            <td>number</td>
            <td>0</td>
            <td>Is there a maximum limit for the length of the value?</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>function</td>
            <td>{'() => {}'}</td>
            <td>The fn used to updated the content</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
