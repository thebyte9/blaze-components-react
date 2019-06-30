import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Table from '../src';

const data = {
  identification: 'id',
  columns: ['name', 'age'],
  rows: [
    {
      name: 'Lorem',
      age: 52
    },
    {
      name: 'Ipsum',
      age: 43
    }
  ]
};

const withEmptyRows = {
  identification: 'id',
  columns: ['name', 'age'],
  rows: []
};

describe('Table component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(<Table data={data} onSelect={() => {}} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle multiselect', () => {
    const wrapper = mount(<Table checkboxes data={data} onSelect={() => {}} />);

    wrapper
      .find('Checkboxes')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('checked')
    ).toBe(true);

    wrapper
      .find('Checkboxes')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('checked')
    ).toBe(false);
  });

  test('should toggle one Checkbox', () => {
    const wrapper = mount(<Table checkboxes data={data} onSelect={() => {}} />);

    wrapper
      .find('Checkboxes')
      .at(2)
      .simulate('click');
    expect(
      wrapper
        .find('input')
        .at(2)
        .prop('checked')
    ).toBe(true);

    wrapper
      .find('Checkboxes')
      .at(2)
      .simulate('click');
    expect(
      wrapper
        .find('input')
        .at(2)
        .prop('checked')
    ).toBe(false);
  });

  test('should show placeholder if there is no data yet', () => {
    const wrapper = mount(<Table data={withEmptyRows} onSelect={() => {}} />);

    expect(wrapper.find('td').text()).toContain('No records available');
  });

  test('Sort should work with numbers', () => {
    const wrapper = mount(<Table data={data} onSelect={() => {}} />);

    wrapper.find('#sort_age').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain(43);

    wrapper.find('#sort_age').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain(52);
  });

  test('Sort should work with Letters', () => {
    const wrapper = mount(<Table data={data} onSelect={() => {}} />);

    wrapper.find('#sort_name').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain('Ipsum');

    wrapper.find('#sort_name').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain('Lorem');
  });
});
