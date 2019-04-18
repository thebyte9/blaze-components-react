import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';

storiesOf('Text Inputs', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Text Inputs</h1>
        <p>Create basic single-line text fields.</p>
      </section>

      <hr />

      <section className="examplesSection">
        <h3>Examples</h3>
        <form>
          <div className="form-field form-field--input form-field--full-width">
            <Input
              label="Text input full width"
              placeholder="Placeholder text"
              onChange={() => {}}
              />
          </div>

          <div className="form-field form-field--input">
            <Input
              label="Text input required"
              placeholder="Placeholder text"
              onChange={() => {}}
              required
              />
          </div>

          <div className="form-field form-field--input">
            <Input
              label="Text input disabled"
              placeholder="Placeholder text"
              onChange={() => {}}
              disabled
              />
          </div>

          <div className="form-field form-field--input form-field--password">
            <Input
              label="Password - show hide"
              placeholder="******"
              onChange={() => {}}
              type="password"
              className="form-password"
              />
          </div>
        </form>

        <div>
          <pre>
            <code>
              {'<Input label="Text input full width" placeholder="Placeholder text" onChange={() => {}} />'}
              <br />
              <br />
              {'<Input label="Text input required" placeholder="Placeholder text" onChange={() => {}} required />'}
              <br />
              <br />
              {'<Input label="Text input disabled" placeholder="Placeholder text" onChange={() => {}} disabled />'}
              <br />
              <br />
              {'<Input label="Password - show hide" placeholder="******" onChange={() => {}} type="password" className="form-password" />'}
            </code>
          </pre>
        </div>
      </section>
    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      <p>
        Inputs can receive a number of props:
        <br />
        label, value, disabled, required, type, onChange
      </p>
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
            <td>label</td>
            <td>String</td>
            <td>empty string</td>
            <td>desctription</td>
          </tr>
          <tr>
            <td>value</td>
            <td>String</td>
            <td>empty string</td>
            <td>desctription</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>desctription</td>
          </tr>
          <tr>
            <td>required</td>
            <td>Boolean</td>
            <td>false</td>
            <td>desctription</td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>text</td>
            <td>desctription</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>Function</td>
            <td>default</td>
            <td>{'() => {}'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('Password Inputs', () => (
    <div className="component-wrapper">
      <h1>Password Inputs</h1>
      <Input
        label="Password - show hide"
        placeholder="******"
        onChange={() => {}}
        type="password"
        className="form-password" />
      <div>
        <pre>
          <code>
            {`
              <Input
                label="Password - show hide"
                placeholder="******"
                onChange={() => {}}
                type="password"
                className="form-password" />
            `}
          </code>
        </pre>
      </div>
    </div>
  ));
