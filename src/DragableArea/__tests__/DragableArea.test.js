import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import DragableArea from '../DragableArea';

const dragAndDropComponent = <DragableArea handleDrop={() => {}}>Drag and drop here</DragableArea>;

describe('DragableArea component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(dragAndDropComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should cancel operation', () => {
    const wrapper = shallow(dragAndDropComponent);

    wrapper.find('Button').at(1).simulate('click');
  });

  test('should browse file', async (done) => {
    const wrapper = mount(dragAndDropComponent);

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

  test('events listener', () => {
    const wrapper = mount(dragAndDropComponent);

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

