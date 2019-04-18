import React from "react";
import { storiesOf } from "@storybook/react";
import Alert from "../index";

const showCaseDivStyles = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  minHeight: "10em"
};

const alertTypes = ["primary, secondary, success, warning, info. light, dark"];

const renderAlerts = alerts => alerts.map(alert => <Alert type={alert} />);

storiesOf("Alert", module)
  .add("Introduction", () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Alerts</h1>
        <p>
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages. Alerts may have a
          type, be dismissable, include a close button, and contain any sort of
          children components.
        </p>

        <hr />
      </section>

      <section className="examplesSection">
        <h3>Examples</h3>

        <div style={showCaseDivStyles}>
          <Alert>{"<Alert>Default alert </Alert>"}</Alert>
          <Alert type="primary">
            {'<Alert type="primary">Primary alert </Alert>'}
          </Alert>
          <Alert type="secondary">
            {'<Alert type="secondary">Secondary alert </Alert>'}
          </Alert>
          <Alert type="success">
            {'<Alert type="success">Success alert </Alert>'}
          </Alert>
          <Alert type="warning">
            {'<Alert type="warning">Warning alert </Alert>'}
          </Alert>
          <Alert type="info">{'<Alert type="info">Info alert </Alert>'}</Alert>
          <Alert type="light">
            {'<Alert type="light">Light alert </Alert>'}
          </Alert>
          <Alert type="dark">{'<Alert type="dark">Dark alert </Alert>'}</Alert>
        </div>

        <div>
          <pre>
            <code>
              {"<Alert>Default alert</Alert>"}
              <br />
              <br />
              {'<Alert type="primary">Primary alert</Alert>'}
              <br />
              <br />
              {'<Alert type="secondary">Secondary alert</Alert>'}
              <br />
              <br />
              {'<Alert type="success">Success alert</Alert>'}
              <br />
              <br />
              {'<Alert type="warning">Warning alert</Alert>'}
              <br />
              <br />
              {'<Alert type="info">Info alert</Alert>'}
              <br />
              <br />
              {'<Alert type="light">Light alert</Alert>'}
              <br />
              <br />
              {'<Alert type="dark">Dark alert</Alert>'}
              <br />
              <br />
            </code>
          </pre>
        </div>
      </section>

      <hr />

      <div>
        <h3>List of modifiers</h3>
        <p>You may use any of the following types</p>
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
  .add("Props", () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      <p>
        Alerts can receive a number of props: close, icon, type, and children
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
  .add("Dismissable", () => (
    <div className="component-wrapper">
      <h1>Alert + close button</h1>
      <Alert close type="primary">
        {"Add close buttons to dismiss alerts"}
      </Alert>
      <div>
        <pre>
          <code>
            {`
              <Alert close type="primary" />
              `}
            <br />
            <br />
          </code>
        </pre>
      </div>
    </div>
  ))
  .add("With icon", () => (
    <div className="component-wrapper">
      <h1>Alert + icon</h1>
      <Alert icon="error" type="warning" />
      <div>
        <pre>
          <code>
            {`
              <Alert icon="error" type="warning" />
              `}
            <br />
            <br />
          </code>
        </pre>
      </div>
    </div>
  ))
  .add("With content", () => (
    <div className="component-wrapper">
      <h1>Alert + content</h1>
      <p>Alerts can take in any sort of children component you require.</p>
      <Alert type="primary">
        <p>Simple primary alert - with content here</p>
        <hr />
        <p>Extra content here</p>
      </Alert>
      <div>
        <pre>
          <code>
            {`
              <Alert type="primary">
                <p>Simple primary alert - with content here</p>
                <hr />
                <p>Extra content here</p>
              </Alert>
              `}
            <br />
            <br />
          </code>
        </pre>
      </div>
    </div>
  ));
