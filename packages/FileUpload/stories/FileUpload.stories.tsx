import '@blaze-react/blaze-components-theme';

import React, from 'react';
import FileUpload from '../src/FileUpload';

import FileUploadReadme from '../README.md';
import { Modal } from '@blaze-react/modal';
import { storiesOf } from '@storybook/react';

storiesOf('FileUpload', module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme,
    },
  })
  .add('Introduction', (): any => {
    const FileUploadModal = ({ onClose }: any) => {
      const onChange = (event: any[], currentFiles: any[]) => { };

      return (

        <FileUpload onChange={onChange} selectOptions={[['default', 'Default']]} />
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

        <FileUploadModal onClose={() => { }} />
      </div>
    );
  });
