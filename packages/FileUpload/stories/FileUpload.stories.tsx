import '@blaze-react/blaze-components-theme';

import React, { useState } from 'react';
import Input from '@blaze-react/input';
import FileUpload from '../src/FileUpload';
import { IFileUploadCustomField, IFileUploadCustomFieldContext } from '../src';

import FileUploadReadme from '../README.md';
import { storiesOf } from '@storybook/react';

storiesOf('FileUpload', module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme,
    },
  })
  .add('Introduction', () => {
    const FileUploadModal = () => (
      <FileUpload onChange={() => undefined} selectOptions={[['default', 'Default'], ['maps', 'Maps store']]} />
    );

    return (
      <div className="component-wrapper">
        <h1>FileUpload</h1>
        <p>
          {
            "FileUpload component is a great draggable area, move one or multiple images to a desired location and 'drop' it there using a mouse or similar device."
          }
        </p>

        <FileUploadModal />
      </div>
    );
  })
  .add('Custom fields', () => {
    const FileUploadWithCustomFields = () => {
      const [files, setFiles] = useState<unknown[]>([]);

      const onChange = (nextFiles: unknown[]) => {
        setFiles(nextFiles);
      };

      const customFields: IFileUploadCustomField[] = [
        {
          name: 'Custom property',
          label: 'Custom property name',
          component: Input,
          buildProps: ({ file }: IFileUploadCustomFieldContext) => ({
            placeholder: `Custom property for ${file.name}`,
          }),
        },
        {
          name: 'videoCode',
          label: 'Video code (custom)',
          component: Input,
          copyEnabled: false,
          isVisible: ({ file }: IFileUploadCustomFieldContext) => file.type === 'video',
          props: {
            placeholder: 'Shown only for video uploads',
          },
        },
      ];

      return (
        <div>
          <p>Upload an image, video, or document to see custom metadata fields rendered for each file.</p>
          <p>Current files: {files.length}</p>
          <FileUpload
            onChange={onChange}
            enableDragAndDrop
            actionText="Add files with metadata"
            selectOptions={[
              ['default', 'Default'],
              ['custom', 'Custom property assets'],
            ]}
            customFields={customFields}
          />
        </div>
      );
    };

    return (
      <div className="component-wrapper">
        <h1>FileUpload custom fields</h1>
        <p>
          This example shows how to attach additional metadata inputs to each uploaded file.
        </p>

        <FileUploadWithCustomFields />
      </div>
    );
  });
