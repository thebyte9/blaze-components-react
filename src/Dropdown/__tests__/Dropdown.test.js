import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Dropdown, DropdownItem } from '../Dropdown';

const component = (
  <Dropdown label="Menu">
    <DropdownItem label="Home" action={() => {}} />
    <DropdownItem action={() => {}} />
  </Dropdown>
);

describe('Dropdown component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(component);
    wrapper.find('div').at(0).simulate('click');
    wrapper.find('span').at(0).simulate('click');
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
