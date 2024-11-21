import React, { useState } from 'react';
import { Button } from '../../Button/src/controller/Button';
import { expect } from '@storybook/jest';
import { Modal } from '../src/controller/Modal';
import { preset, ThemeProvider } from '@blaze-react/themes';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { modalArgTypes } from './shared';

export default {
  title: '@blaze-react/Modal/All-Stories',
  component: Modal,
  argTypes: modalArgTypes,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={preset}>
      <Button label="Open Dialog" onClick={() => setShowModal(true)} />
      {showModal ? (
        <Modal {...args} onClose={() => setShowModal(false)}>
          <div className="p-5 overflow-y-auto max-h-96">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </Modal>
      ) : null}
    </ThemeProvider>
  );
};



export const Demo = Template.bind({});

Demo.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Open Dialog'));
  const elements = await canvas.findAllByText(/Lorem Ipsum is simply dummy text/i);
  expect(elements.length).toBe(3);
};

export const Default = Template.bind({});

Default.args = {
  theme: preset,
  title: 'Modal',
  showFooter: true,
  variant: 'default',
  actions: [
    {
      label: 'Cancel',
      onClick: action('Cancel'),
      variant: 'secondary',
      disabled: false,
    },
    {
      label: 'Save',
      onClick: action('Save'),
      disabled: false,
    },
  ],
};
