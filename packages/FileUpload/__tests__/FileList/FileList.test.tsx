import FileList from '../../src/FileList';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { nanoid } from 'nanoid';

const handleCancelMock = jest.fn();
const handleInputChangeMock = jest.fn();
const handleSelectChange = jest.fn();

const FileListComponent = ({ previewImages }) => (
  <FileList
    previewImages={previewImages}
    handleCancel={handleCancelMock}
    handleInputChange={handleInputChangeMock}
    handleSelectChange={handleSelectChange}
    selectOptions={[]}
  />
);

describe('FileList component', () => {
  test('should match snapshot', () => {
    const previewImages = [
      {
        file: {
          id: nanoid(),
          base64: new Blob(['image content'], { type: 'image/png' }),
          type: 'image',
          name: 'file-1.png',
        },
        data: { caption: 'test caption' },
      },
    ];
    const { asFragment } = render(FileListComponent({ previewImages }));
    expect(asFragment()).toMatchSnapshot();
  });

  test('should fire delete event', () => {
    const previewImages = [
      {
        file: {
          id: nanoid(),
          base64: new Blob(['doc content'], { type: 'doc' }),
          type: 'doc',
          name: 'file-2.doc',
        },
        data: { caption: 'test caption' },
      },
    ];
    render(FileListComponent({ previewImages }));
    fireEvent.click(screen.getByTestId('delete'));
  });

  test('should fire onChange event', () => {
    const previewImages = [
      {
        file: {
          id: nanoid(),
          base64: new Blob(['image content'], { type: 'image/png' }),
          type: 'image',
          name: 'file-1.png',
        },
        data: { caption: 'test caption' },
      },
    ];
    render(FileListComponent({ previewImages }));
    fireEvent.change(screen.getByTestId('store-type'));
  });

  test('should return input label for video files ', () => {
    const previewImages = [
      {
        file: {
          id: nanoid(),
          base64: new Blob(['image content'], { type: 'video/mp4' }),
          type: 'video',
          name: 'video.mp4',
        },
        data: { caption: 'test caption' },
      },
    ];
    const { asFragment } = render(FileListComponent({ previewImages }));
    expect(asFragment()).toMatchSnapshot();
  });
});
