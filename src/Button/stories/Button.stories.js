import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';
import './Button.css';

const showCaseDivStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  minHeight: '10em'
};

const showCaseButtonStyles = {
  marginBottom: '2em'
};

storiesOf('Components/Button', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Buttons</h1>
        <p>
          Custom button styles for actions in forms, dialogs, and more with support for
          multiple sizes, states, and more.
        </p>
      </section>

      <hr />

      <section className="examplesSection">
        <h3>Examples</h3>
        <p>You may use any of the available modifiers to easily create styled buttons</p>

        <div style={showCaseDivStyles}>
          <Button style={showCaseButtonStyles} className="button">BUTTON</Button>
          <Button style={showCaseButtonStyles} className="button button--plain">PLAIN</Button>
          <Button style={showCaseButtonStyles} className="button button--rounded">ROUNDED</Button>
          <Button style={showCaseButtonStyles} className="button button--cta">CTA</Button>
          <Button style={showCaseButtonStyles} className="button button--alert">ALERT</Button>
          <Button style={showCaseButtonStyles} className="button button--outline">OUTLINE</Button>
          <Button style={showCaseButtonStyles} className="button button--disabled">DISABLED</Button>
          <Button style={showCaseButtonStyles} className="button button--light">LIGHT</Button>
          <Button style={showCaseButtonStyles} className="button button--dark">DARK</Button>
          <Button style={showCaseButtonStyles} className="button button--outline button--rounded">ROUNDED/OUTLINE</Button>
        </div>

        <div>
          <pre>
            <code>
              {'<Button className="button">Button</Button>'}
              <br />
              <br />
              {'<Button className="button button--plain">PLAIN</Button>'}
              <br />
              <br />
              {'<Button className="button button--rounded">ROUNDED</Button>'}
              <br />
              <br />
              {'<Button className="button button--cta">CTA</Button>'}
              <br />
              <br />
              {'<Button className="button button--alert">ALERT</Button>'}
              <br />
              <br />
              {'<Button className="button button--outline">OUTLINE</Button>'}
              <br />
              <br />
              {'<Button className="button button--disabled">DISABLED</Button>'}
              <br />
              <br />
              {'<Button className="button button--light">LIGHT</Button>'}
              <br />
              <br />
              {'<Button className="button button--dark">DARK</Button>'}
              <br />
              <br />
              {'<Button className="button button--outline button--rounded">ROUNDED/OUTLINE</Button>'}
              <br />
              <br />
            </code>
          </pre>
        </div>
      </section>

      <hr />

      <div>
        <h3>List of modifiers</h3>
        <p>
          You may combine the --outline and --rounded classes with any of the following modifiers
        </p>
        <table>
          <thead>
            <tr>
              <th>Modifiers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>button--rounded</td>
            </tr>
            <tr>
              <td>button--cta</td>
            </tr>
            <tr>
              <td>button--alert</td>
            </tr>
            <tr>
              <td>button--light</td>
            </tr>
            <tr>
              <td>button--dark</td>
            </tr>
            <tr>
              <td>button--outline</td>
            </tr>
            <tr>
              <td>button--disabled</td>
            </tr>
            <tr>
              <td>button--icon</td>
            </tr>
            <tr>
              <td>button--small</td>
            </tr>
            <tr>
              <td>button--full-width</td>
            </tr>
            <tr>
              <td>button--back</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      <p>Buttons can receive a number of props: disabled, isSubmit, children, attrs</p>
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
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Button is disabled/enabled</td>
          </tr>
          <tr>
            <td>isSubmit</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Button of type submit or type button</td>
          </tr>
          <tr>
            <td>children</td>
            <td>Single/array of node(s)</td>
            <td>null</td>
            <td>Does the button have inner components</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('Outline', () => (
    <div className="component-wrapper">
      <h3>Outline buttons</h3>
      <p>
        Looking for a lighter touch? Use the
        <em><strong>--outline </strong></em>
        modifier.  You may combine this with any of the other modifiers
      </p>

      <div style={showCaseDivStyles}>
        <Button className="button button--outline">PLAIN</Button> 
        <Button className="button button--outline button--rounded">ROUNDED</Button> 
        <Button className="button button--outline button--cta">CTA</Button> 
        <Button className="button button--outline button--alert">ALERT</Button> 
        <Button className="button button--outline button--disabled">DISABLED</Button>
        <Button className="button button--outline button--light">LIGHT</Button> 
        <Button className="button button--outline button--dark">DARK</Button> 
      </div>

      <div>
        <pre>
          <code>
            {'<Button className="button button--outline">PLAIN</Button>'}
            <br />
            <br />
            {'<Button className="button button--outline button--rounded">ROUNDED</Button>'}
            <br />
            <br />
            {'<Button className="button button--outline button--cta">CTA</Button>'}
            <br />
            <br />
            {'<Button className="button button--outline button--alert">ALERT</Button>'}
            <br />
            <br />
            {'<Button className="button button--outline button--disabled">DISABLED</Button'}
            {'<Button className="button button--outline button--light">LIGHT</Button>'}
            <br />
            <br />
            {'<Button className="button button--outline button--dark">DARK</Button>'}
            <br />
            <br />
          </code>
        </pre>
      </div>

      <br />
      <br />
      <br />
    </div>
  ))
  .add('Rounded', () => (
    <div className="component-wrapper">
      <h3>Rounded Buttons</h3>
      <p>
        Add the
        <em><strong>--rounded </strong></em>
        modifier along with any type of button to create rounded buttons
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Button className="button button--cta button--rounded">CTA</Button>
        <Button className="button button--alert button--rounded">ALERT</Button>
        <Button className="button button--light button--rounded">LIGHT</Button>
        <Button className="button button--dark button--rounded">DARK</Button>
      </div>

      <div>
        <pre>
          <code>
            {'<Button className="button button--cta button--rounded">CTA</Button>'}
            <br />
            <br />
            {'<Button className="button button--alert button--rounded">ALERT</Button>'}
            <br />
            <br />
            {'<Button className="button button--light button--rounded">LIGHT</Button>'}
            <br />
            <br />
            {'<Button className="button button--dark button--rounded">DARK</Button>'}
            <br />
            <br />
          </code>
        </pre>
      </div>
    </div>
  ))
  .add('Sizing', () => (
    <div className="component-wrapper">
      <h3>Sizing</h3>
      <p>
        If you require small or full width buttons, use the
        <em><strong>--small </strong></em>
        or
        <em><strong>--full-width </strong></em>
        modifiers
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button className="button button--small">Small</Button>
        <br />
        <br />
        <Button className="button button--full-width">Full width</Button>
      </div>

      <div>
        <pre>
          <code>
            {'<Button className="button button--small">Small</Button>'}
            <br />
            <br />
            {'<Button className="button button--full-width">Full width</Button>'}
          </code>
        </pre>
      </div>
    </div>
  ));
