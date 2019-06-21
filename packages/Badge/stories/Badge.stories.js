import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '../index';
import BadgeReadme from '../README.md';

storiesOf('Badges', module)
  .addParameters({
    readme: {
      sidebar: BadgeReadme
    }
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Badges</h1>
      <p>
        Badges are small components typically used to communicate a numerical value or indicate the
        status of an item to the user.
      </p>

      <h4>Simple</h4>
      <Badge type="primary">Badge</Badge>
      <br />
      <br />

      <h4>Pill</h4>
      <Badge type="success" pill>
        Badge
      </Badge>
      <br />
      <br />

      <h4>Link</h4>
      <Badge type="info" link to="https://www.thebyte9.com/">
        Go to byte9
      </Badge>
      <br />
      <br />

      <h4>Rounded</h4>
      <Badge type="alert" round>
        10
      </Badge>
      <br />
      <br />
    </div>
  ));
