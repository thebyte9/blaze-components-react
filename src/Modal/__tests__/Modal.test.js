import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Modal simple isActive buttonText="Simple modal" />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle modal on click button', () => {
    const wrapper = shallow(<Modal isActive buttonText="Simple modal" />);
    wrapper.find('Button').at(0).simulate('click');
    expect(wrapper.find('.modal')).toHaveLength(0);
  });

  test('should render and close alert modal', () => {
    const actions = [
      ['delete', () => {}, 'alert small']
    ];
    const wrapper = shallow(<Modal alert isActive actions={actions} />);
    expect(wrapper.find('.modal--alert')).toHaveLength(1);
    wrapper.find('Button').at(0).simulate('click');
    expect(wrapper.find('.modal--alert')).toHaveLength(0);
  });

  test('should render and close scrollable modal', () => {
    const actions = [
      ['Action 1', () => {}],
      ['Action 2', () => {}]
    ];
    const wrapper = shallow(<Modal isActive actions={actions} title="Scrollable Modal" />);
    expect(wrapper.find('.modal__title').text()).toContain('Scrollable Modal');
    wrapper.find('.modal__close').simulate('click');
    expect(wrapper.find('.modal')).toHaveLength(0);
  });
});
