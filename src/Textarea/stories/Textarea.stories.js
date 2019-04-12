import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '../index';

const tableStyles = {
  width: '100%',
  textAlign: 'center'
};

storiesOf('Components/Inputs - Textarea', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Textarea</h1>
        <p>
          The HTML textarea element represents a multi-line plain-text editing control,
          useful when you want to allow users to enter a sizeable amount of free-form text,
          for example a comment on a review or feedback form.
        </p>

        <hr />
      </section>

      <section className="exampleSection">
        <h3>Examples</h3>
        <p>Textareas may be expanded or contracted and have a limit of characters</p>
        
        <div className="form-field form-field--textarea">
          <Textarea
            label="Simple textarea"
            placeholder="Content..."
            onChange={() => {}}
            required
            />
        </div>

        <div className="form-field form-field--textarea form-field--full-width">
          <Textarea
            label="Textarea with limit"
            placeholder="Content..."
            onChange={() => {}}
            limit={40}
            />
        </div>

        <div>
          <pre>
            <code>
              {'<Textarea label="Simple textarea" placeholder="Content..." onChange={() => {}} required />'}
              <br />
              <br />
              {'<Textarea label="Textarea with limit" placeholder="Content..." onChange={() => {}} limit={40} />'}
            </code>
          </pre>
        </div>
      </section>
    </div>
  ))
  .add('Props', () => (
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
