import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Dropdown from '../src/Dropdown';

const component = (
  <Dropdown label="Dropdown">
    <a href="/">Settings</a>
    <a href="/">Sign out</a>
  </Dropdown>
);

describe('Dropdown component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(component);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
