import '@blaze-react/blaze-components-theme';
import { storiesOf } from '@storybook/react';
import Input from '@blaze-react/input';
import React, { useState } from 'react';
import ModalReadme from '../README.md';
import { DeprecatedModal } from '../src/controller/Modal';

const tooltip = {
  tooltipContent: (
    <>
      tooltip on <em>click</em>
    </>
  ),
  trigger: 'click',
};

const ModalDemo = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(true);

  const onClose = () => setModalStatus(false);

  const alertActions = [
    {
      callback: () => ({}),
      modifiers: ['small'],
      textButton: 'delete',
    },
  ];

  return (
    <>
      {modalStatus && (
        <DeprecatedModal title="Simple Modal" actions={alertActions} onClose={onClose}>
          <p>lorem ipsum dolor...</p>
          <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <Input
            label='Form'
            id='form-1'
            tooltip={tooltip}
          />
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
          <Input
            label='Form'
            id='form-2'
            tooltip={tooltip}
          />
          <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </DeprecatedModal>
      )}
    </>
  );
};

storiesOf('Modal', module)
  .addParameters({
    readme: {
      sidebar: ModalReadme,
    },
  })
  .add('Introduction', () => (
    <div className="component-wrapper">
      <h1>Modals</h1>

      <p>
        A modal dialog is a dialog that appears at the top of the main content. Use a modal for dialog boxes, forms,
        confirmation messages or other content that can be accessed.
      </p>

      <ModalDemo />
    </div>
  ));
