import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '../index';

storiesOf('Badges', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Badges</h1>
        <p>
          Badges are small components typically used to communicate a numerical value
          or indicate the status of an item to the user.
        </p>
      </section>

      <hr />

      <section className="examplesSection">
        <h3>Examples</h3>
        <div>
          <Badge type="primary">Badge</Badge>
          <br />
          <br />
          <Badge type="secondary" link>link</Badge>
          <br />
          <br />
          <Badge type="alert" round>10</Badge>
          <br />
          <br />
          <Badge type="info" pill link to="https://www.thebyte9.com/">Link to byte9</Badge>
        </div>

        <div>
          <pre>
            <code>
              {'<Badge type="primary">Badge</Badge>'}
              <br />
              <br />
              {'<Badge type="secondary" link>link</Badge>'}
              <br />
              <br />
              {'<Badge type="alert" round>10</Badge>'}
              <br />
              <br />
              {'<Badge type="info" pill link to="https://www.thebyte9.com/">Link to byte9</Badge>'}
              <br />
              <br />
            </code>
          </pre>
        </div>
      </section>

    </div>
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
            <td>round</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Is the badge round?</td>
          </tr>
          <tr>
            <td>link</td>
            <td>Boolean</td>
            <td>false</td>
            <td>is the badge a link?</td>
          </tr>
          <tr>
            <td>pill</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Is is styled as a pill?</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Does the badge contain an icon?</td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>false</td>
            <td>The type of badge</td>
          </tr>
          <tr>
            <td>to</td>
            <td>String</td>
            <td>#</td>
            <td>If badge is a link, where to link to</td>
          </tr>
          <tr>
            <td>children</td>
            <td>Single or array of nodes</td>
            <td>"No content"</td>
            <td>Any children components within the badge</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('Simple', () => (
    <div className="component-wrapper">
      <h1>Simple badges</h1>
      <Badge type="primary">Badge</Badge>
      &nbsp;
      <Badge type="secondary" link>link</Badge>
    </div>
  ))
  .add('Rounded', () => (
    <div className="component-wrapper">
      <h1>Rounded badges</h1>
      <Badge type="alert" round>10</Badge> &nbsp;
      <Badge type="info" pill link to="https://www.thebyte9.com/">Link to byte9</Badge>
    </div>
  ))
