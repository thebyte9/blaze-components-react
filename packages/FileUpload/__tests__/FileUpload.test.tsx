import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import FileUpload from '../src/FileUpload';
import React from 'react';
import userEvent from '@testing-library/user-event';

declare global {
  interface Window {
    FileReader: any;
  }
}

const FileUploadComponent = (
  <FileUpload selectOptions={[['default', 'Default']]} onChange={() => {}}>
    Drag and drop here
  </FileUpload>
);

describe('FileUpload component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(FileUploadComponent);
    expect(asFragment).toMatchSnapshot();
  });

  test('should drop files', () => {
    render(FileUploadComponent);
    const image = new Blob(['file contents'], { type: 'image/png' });

    fireEvent.drop(screen.getByText('Drag & drop file to upload'), {
      dataTransfer: {
        files: [image],
      },
    });
  });
});
