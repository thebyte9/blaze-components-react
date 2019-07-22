import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import FileUpload from '../src';

declare global {
  interface Window {
    FileReader: any;
  }
}

const FileUploadComponent = <FileUpload handleDrop={() => { }}>Drag and drop here</FileUpload>;

describe('FileUpload component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(FileUploadComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should cancel operation', () => {
    const wrapper = mount(FileUploadComponent);

    wrapper
      .find('Button')
      .at(1)
      .simulate('click');
  });

  test('should browse file', async done => {
    const wrapper = mount(FileUploadComponent);

    wrapper
      .find('Button')
      .at(0)
      .simulate('click');

    const typeImage = new Blob(['file contents'], { type: 'image/png' });
    const typeFile = new Blob(['file contents'], { type: 'application/pdf' });

    const readAsDataURL = jest.fn();
    const onload = jest.fn();
    const onerror = jest.fn();

    const dummyFileReader = {
      readAsDataURL,
      onload,
      onerror
    };

    window.FileReader = jest.fn(() => dummyFileReader);

    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { files: [typeImage] } });
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { files: [typeFile] } });
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { files: [] } });
    done();
  });

  test('should drop files', () => {
    const wrapper = mount(FileUploadComponent);

    const domNode = wrapper.getDOMNode();

    const dragover = new Event('dragover');

    const drop: CustomEvent & { dataTransfer?: any } = new CustomEvent('drop', { bubbles: true, cancelable: true });

    const file = {
      name: 'test.jpg',
      type: 'image/jpg',
    } as File;

    const fileList = {
      length: 1,
      item: () => null,
      0: file,
    }


    drop.dataTransfer = {
      files: fileList
    };

    const dropWithoutItems: CustomEvent & { dataTransfer?: any } = new CustomEvent('drop', { bubbles: true, cancelable: true });
    dropWithoutItems.dataTransfer = { files: fileList };

    domNode.dispatchEvent(dragover);
    domNode.dispatchEvent(drop);
    domNode.dispatchEvent(dropWithoutItems);
  });
});
