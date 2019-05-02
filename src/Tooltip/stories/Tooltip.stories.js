import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../index';

storiesOf('Tooltips', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Tooltips</h1>
        <p>Tooltips display informative text when users hover over or focus on an element.</p>
      </section>

      <hr />

      <section className="exampleSection">
        <h3>Examples</h3>
        <p>Hover over any of the following tooltips</p>
        <div>
          <Tooltip text="Byte9" position="top">Tooltip on top</Tooltip>
          <br />
          <br />
          <Tooltip text="Byte9" position="bottom">Tooltip on bottom</Tooltip>
          <br />
          <br />
          <Tooltip text="Byte9" position="right">Tooltip on right</Tooltip>
          <br />
          <br />
          <Tooltip text="Byte9" position="left">Tooltip on left</Tooltip>
          <br />
          <br />
        </div>

        <div>
          <pre>
            <code>
              {'<Tooltip text="Byte9" position="top">Tooltip on top</Tooltip>'}
              <br />
              <br />
              {'<Tooltip text="Byte9" position="bottom">Tooltip on bottom</Tooltip>'}
              <br />
              <br />
              {'<Tooltip text="Byte9" position="right">Tooltip on right</Tooltip>'}
              <br />
              <br />
              {'<Tooltip text="Byte9" position="left">Tooltip on left</Tooltip>'}
            </code>
          </pre>
        </div>
      </section>
    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Tooltips</h1>
      <p>Tooltips can receive a number of props: position, text, and children</p>
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
            <td>Position</td>
            <td>String</td>
            <td>top</td>
            <td>Where the tooltip should be position relative to the element</td>
          </tr>
          <tr>
            <td>Text</td>
            <td>String</td>
            <td>"No content"</td>
            <td>if no text is received, it will output "No content"</td>
          </tr>
          <tr>
            <td>Children</td>
            <td>Array or single node</td>
            <td>"No content"</td>
            <td>Children elements the tooltip may have</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
