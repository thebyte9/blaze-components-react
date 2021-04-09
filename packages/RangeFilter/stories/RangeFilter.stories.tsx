import '@blaze-react/blaze-components-theme';

import React, { Suspense, lazy } from 'react';

import inputReadme from '../README.md';
import { storiesOf } from '@storybook/react';

const value = {
  max: 20000000,
  min: 10000000,
  step: 1,
  minValue: 10000000,
  maxValue: 20000000,
};

storiesOf('Range Filter', module)
  .addParameters({
    readme: {
      sidebar: inputReadme,
    },
  })
  .add('Introduction', () => {
    const RangeFilter: any = lazy(() => import('../src/RangeFilter'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Range Filter</h1>
          </section>

          <RangeFilter
            label="Choose a range"
            value={value}
            onChange={(val: any): void => {}}
            required
            error
            name="price"
            id="price"
          />
        </div>
      </Suspense>
    );
  });
