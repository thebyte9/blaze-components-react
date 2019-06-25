import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../src';
import BreadcrumbsReadme from '../README.md';

storiesOf('Breadcrumbs', module)
  .addParameters({
    readme: {
      sidebar: BreadcrumbsReadme
    }
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Breadcrumbs</h1>
      <p>Breadcrumbs allow users to make selections from a range of values.</p>

      <h4>Simple use</h4>

      <Breadcrumb>
        <a href="?path=/story/breadcrumbs--introduction">First</a>
        <a href="?path=/story/breadcrumbs--introduction">Second</a>
        <a href="?path=/story/breadcrumbs--introduction">
          Third - long text will be truncated for a better user experience
        </a>
      </Breadcrumb>
    </div>
  ));
