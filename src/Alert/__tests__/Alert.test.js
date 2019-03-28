import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Alert from '../Alert';

describe('Alert component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should close alert', () => {
    const wrapper = shallow(<Alert close icon="error" type="warning" />);
    wrapper.find('.icon-button--close').simulate('click');
    expect(wrapper.children().length).toBe(0);
  });
});
