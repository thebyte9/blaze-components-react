import '@blaze-react/blaze-components-theme';

import React, { Suspense, lazy } from 'react';

import FileUploadReadme from '../README.md';
import Modal from '@blaze-react/modal';
import { storiesOf } from '@storybook/react';

storiesOf('FileUpload', module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme,
    },
  })
  .add('Introduction', (): any => {
    const FileUploadModal = ({ onClose }: any) => {
      const onChange = (event: any[], currentFiles: any[]) => {};

      const FileUpload: any = lazy(() => import('../src/FileUpload'));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal
            title="Add media"
            actions={[
              {
                modifiers: ['cancel'],
                textButton: 'Cancel',
              },
              {
                modifiers: [],
                textButton: 'Save',
              },
            ]}
            upload
          >
            <FileUpload onChange={onChange} selectOptions={[['default', 'Default']]} />
          </Modal>
        </Suspense>
      );
    };
    return (
      <div className="component-wrapper">
        <h1>FileUpload</h1>
        <p>
          {
            "FileUpload component is a great draggable area, move one or multiple images to a desired location and 'drop' it there using a mouse or similar device."
          }
        </p>

        <FileUploadModal onClose={() => {}} />
      </div>
    );
  });
