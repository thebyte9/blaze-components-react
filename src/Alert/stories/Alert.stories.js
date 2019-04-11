import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '../index';

const showCaseDivStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  minHeight: '10em'
};

const alertTypes = ['primary, secondary, success, warning, info. light, dark'];

const renderAlerts = alerts => alerts.map(alert => <Alert type={alert} />);

storiesOf('Alert', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Alerts</h1>
        <p>
        Provide contextual feedback messages for typical user actions with the handful
        of available and flexible alert messages.
        Alerts may have a type, be dismissable, include a close button, and contain
        any sort of children components.
        </p>

        <hr />
      </section>

      <section className="examplesSection">
        <h3>Examples</h3>

        <div style={showCaseDivStyles}>
          <Alert>{'<Alert>Simple default alert </Alert>'}</Alert>
          <Alert type="primary">{'<Alert type="primary">Simple primary alert </Alert>'}</Alert>
          <Alert type="secondary">{'<Alert type="secondary">Simple secondary alert </Alert>'}</Alert>
          <Alert type="success">{'<Alert type="success">Simple success alert </Alert>'}</Alert>
          <Alert type="warning">{'<Alert type="warning">Simple warning alert </Alert>'}</Alert>
          <Alert type="info">{'<Alert type="info">Simple info alert </Alert>'}</Alert>
          <Alert type="light">{'<Alert type="light">Simple light alert </Alert>'}</Alert>
          <Alert type="dark">{'<Alert type="dark">Simple dark alert </Alert>'}</Alert>
          {renderAlerts(alertTypes)}
        </div>

      </section>

      <hr />

      <div>
        <h3>List of modifiers</h3>
        <p>
          You may use any of the following types
        </p>
        <table>
          <thead>
            <tr>
              <th>Types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>primary</td>
            </tr>
            <tr>
              <td>secondary</td>
            </tr>
            <tr>
              <td>success</td>
            </tr>
            <tr>
              <td>warning</td>
            </tr>
            <tr>
              <td>info</td>
            </tr>
            <tr>
              <td>light</td>
            </tr>
            <tr>
              <td>dark</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      {/* <p>Buttons can receive a number of props: disabled, isSubmit, children, attrs</p> */}
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
            <td>close</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Alert has a close button or not</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>''</td>
            <td>Alert has an icon or not</td>
          </tr>
          <tr>
            <td>type</td>
            <td>string</td>
            <td>''</td>
            <td>The type of alert</td>
          </tr>
          <tr>
            <td>children</td>
            <td>single/array of nodes</td>
            <td>'No content'</td>
            <td>Any child components</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('Simple', () => (
    <div className="component-wrapper">
      <h1>Simple alerts</h1>
      <Alert>Simple default alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="primary">Simple primary alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="secondary">Simple secondary alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="success">Simple success alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="warning">Simple warning alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="info">Simple info alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="light">Simple light alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
      <Alert type="dark">Simple dark alert - lorem ipsum dolor sit amet consectetur adipiscing</Alert>
    </div>
  ))
  .add('Dismissable', () => (
    <div className="component-wrapper">
      <h1>Alert + close button</h1>
      <Alert close type="primary">{'<Alert close type="primary">Simple primary alert</Alert>'}</Alert>
    </div>
  ))
  .add('With icon', () => (
    <div className="component-wrapper">
      <h1>Alert + icon</h1>
      <Alert icon="error" type="warning">{'<Alert icon="error" type="warning">Simple warning alert</Alert>'}</Alert>
    </div>
  ))
  .add('With content', () => (
    <div className="component-wrapper">
      <h1>Alert + content</h1>
      <p>
        Alerts can take in any sort of children component you require.
      </p>
      <Alert close type="dark">
        {'<Alert close type="dark">Heading here</Alert>'}
      </Alert>
    </div>
  ));
