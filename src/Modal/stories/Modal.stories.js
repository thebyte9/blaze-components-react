import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../index';

const actions = [
    ['Action 1', () => {}],
    ['Action 2', () => {}]
]

storiesOf('Modal', module)
  .add('Simple', () => (
      <Modal
        title="Simple Modal"
        actions={actions}
        simple>
        <p>lorem ipsum dolor...</p>
      </Modal>
  ))
  .add('Alert', () => (
    <Modal
      actions={[['delete', () => {}]]}
      alert>
      <p>Delete item?</p>
    </Modal>
  ))
  .add('Scrollable', () => (
    <Modal
      title="Scrollable Modal"
      actions={actions}
      >
      <p>Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below;
          Default modal with scrollable content:
      </p>
      <hr />
      <p>Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below;
          Default modal with scrollable content:
      </p>
      <hr />
      <p>Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below;
          Default modal with scrollable content:
      </p>
      <hr />
      <p>Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below;
          Default modal with scrollable content:
      </p>
      <hr />
      <p>Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below;
          Default modal with scrollable content:
      </p>
    </Modal>
));
