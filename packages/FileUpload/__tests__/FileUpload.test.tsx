import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import FileUpload from '../src/FileUpload';
import React from 'react';

declare global {
  interface Window {
    FileReader: any;
  }
}

const makeImage = () => new Blob(['file contents'], { type: 'image/png' });

const FileUploadComponent = (
  <FileUpload selectOptions={[['default', 'Default']]} onChange={jest.fn()}>
    Drag and drop here
  </FileUpload>
);

describe('FileUpload component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(FileUploadComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should drop files', () => {
    render(FileUploadComponent);
    const image = makeImage();

    fireEvent.drop(screen.getByText('Drag & drop files to bulk upload'), {
      dataTransfer: {
        files: [image],
      },
    });
  });

  test('renders a custom FileInputsComponent (schema/relations UI injection)', async () => {
    const onChange = jest.fn();

    const CustomFileInputs = () => <div data-testid="custom-file-inputs">Custom Inputs</div>;

    render(
      <FileUpload
        selectOptions={[['default', 'Default']]}
        onChange={onChange}
        FileInputsComponent={CustomFileInputs}
      >
        Drag and drop here
      </FileUpload>
    );

    const dropArea = screen.getByText('Drag & drop file to upload');
    const image = makeImage();

    fireEvent.drop(dropArea, {
      dataTransfer: {
        files: [image],
      },
    });

    const injected = await screen.findByTestId('custom-file-inputs');
    expect(injected).toBeInTheDocument();
  });
});
