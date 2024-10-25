import '@blaze-react/blaze-components-theme';
import { storiesOf } from '@storybook/react';
import React, { lazy, Suspense } from 'react';
import dateTimeInputReadme from '../README.md';

import 'react-datepicker/dist/react-datepicker.css';
import DateTimeInput from '../src/DateTimeInput';
import Tooltip from '@blaze-react/tooltip';

const tooltipContent = (type) => (
  <>
    Tooltip for <em>{type}</em>
  </>
);

storiesOf('DateTime Input', module)
  .addParameters({
    readme: {
      sidebar: dateTimeInputReadme,
    },
  })
  .add('Introduction', () => {
    return (
      <div className="component-wrapper">
        <section className="introductionSection">
          <h1>Date Time Inputs</h1>
          <p>Create date pickers configured as date, time or datetime</p>
        </section>

        <h4>Date + Time</h4>
        <DateTimeInput
          validationMessage="required"
          label="Selects both date and time"
          onChange={(): void => { return; }}
          type="dateTime"
          tooltip={{
            tooltipContent: tooltipContent('Date + Time'),
            trigger: 'click',
          }}
        />

        <h4>Only date</h4>
        <DateTimeInput
          validationMessage="required"
          label="Selects only date"
          onChange={(): void => { return; }}
          type="date"
          tooltip={{
            tooltipContent: tooltipContent('Only Date'),
            trigger: 'click',
          }}
        />

        <h4>Only time</h4>
        <DateTimeInput
          validationMessage="required"
          label="Selects only time"
          onChange={(): void => { return; }}
          type="time"
          tooltip={{
            tooltipContent: tooltipContent('Only Time'),
            trigger: 'click',
          }}
        />
      </div>
    );
  });
