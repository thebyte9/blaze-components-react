import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import FileUpload from '../FileUpload';

const FileUploadComponent = (
  <FileUpload
    handleDrop={() => {}}>
      Drag and drop here
  </FileUpload>
);

describe('FileUpload component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(FileUploadComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should cancel operation', () => {
    const wrapper = shallow(FileUploadComponent);

    wrapper.find('Button').at(1).simulate('click');
  });

  test('should browse file', async (done) => {
    const wrapper = mount(FileUploadComponent);

    wrapper.find('Button').at(0).simulate('click');

    const file = new Blob(['file contents'], { type: 'image/png' });

    const readAsDataURL = jest.fn();
    const onload = jest.fn();
    const onerror = jest.fn();

    const dummyFileReader = {
      readAsDataURL,
      onload,
      onerror
    };

    window.FileReader = jest.fn(() => dummyFileReader);

    wrapper.find('input').at(0).simulate('change', { target: { files: [file] } });
    wrapper.find('input').at(0).simulate('change', { target: { files: [] } });

    done();
  });

  test('should drop files', () => {
    const wrapper = mount(FileUploadComponent);

    const domNode = wrapper.getDOMNode();

    const dragover = new Event('dragover');

    const drop = new Event('drop');
    drop.dataTransfer = { files: [{}, {}] };

    const dropWithoutItems = new Event('drop');
    dropWithoutItems.dataTransfer = { files: [] };

    domNode.dispatchEvent(dragover);
    domNode.dispatchEvent(drop);
    domNode.dispatchEvent(dropWithoutItems);
  });
});

