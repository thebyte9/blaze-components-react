import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../index';

storiesOf('Components/Breadcrumb', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Breadcrumbs</h1>
        <p>Breadcrumbs allow users to make selections from a range of values.</p>
      </section>

      <hr />

      <section className="exampleSection">
        <h3>Examples</h3>
        <div>
          <Breadcrumb>
            <a href="?path=/story/breadcrumb--simple">First</a>
            <a href="?path=/story/breadcrumb--simple">Second</a>
            <a href="?path=/story/breadcrumb--simple">Third - long text will be truncated for a better user experience</a>
          </Breadcrumb>
        </div>
        <div>
          <pre>
            <code>
              {
                `
                <Breadcrumb>
                  <a href="?path=/story/breadcrumb--simple">First</a>
                  <a href="?path=/story/breadcrumb--simple">Second</a>
                  <a href="?path=/story/breadcrumb--simple">Third - long text will be truncated for a better user experience</a>
                </Breadcrumb>
                `
              }
            </code>
          </pre>
        </div>
      </section>

      <hr />

      <Breadcrumb />
      <div>
        <pre>
          <code>
            {'<Breadcrumb />'}
          </code>
        </pre>
      </div>
    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      <p>
        Breadcrumbs can only receive children elements.
        The last breadcrumb will be truncated for user experience.
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
            <td>children</td>
            <td>A single or array of nodes</td>
            <td>{'<li>No Content</li>'}</td>
            <td>How many list items will be created</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
