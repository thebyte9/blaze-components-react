import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Table from '../index';

const data = {
  identification: 'id',
  columns: ['name', 'age'],
  rows: [
    {
      id: 1,
      name: 'Dev1',
      age: 26
    },
    {
      id: 2,
      name: 'Dev2',
      age: 52
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
    const wrapper = shallow(<Table data={data} onSelect={() => {}} />);

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
    const wrapper = shallow(<Table data={withEmptyRows} onSelect={() => {}} />);

    expect(wrapper.find('td').text()).toContain('No records available');
  });
});
