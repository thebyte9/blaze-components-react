import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Autocomplete from '../src';

const data = {
  keyValue: 'name',
  filterBy: ['name'],
  data: [
    {
      id: 1,
      name: 'Lorem'
    },
    {
      id: 2,
      name: 'Ipsum'
    },
    {
      id: 3,
      name: 'Dolor'
    }
  ]
};

const AutocompleteComponent = <Autocomplete data={data} selected={() => {}} />;

describe('Autocomplete component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(AutocompleteComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should allow to filter', () => {
    const wrapper = mount(AutocompleteComponent);

    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'Lorem' } });
    expect(
      wrapper
        .find('.panel')
        .at(0)
        .text()
    ).toContain('Lorem');
  });
});
