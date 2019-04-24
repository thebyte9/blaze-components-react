import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Table from '../Table';

const data = {
  identification: 'id',
  columns: ['name', 'age'],
  rows: [{
    id: 1,
    name: 'Adam',
    age: 26,
  }, {
    id: 2,
    name: 'Oscar',
    age: 52,
  }]
};

describe('Table component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Table data={data} onSelect={() => {}} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle multiselect', () => {
    const wrapper = mount(<Table data={data} onSelect={() => {}} />);

    wrapper.find('Checkboxes').at(0).simulate('click');
    expect(wrapper.find('input').at(0).prop('checked')).toBe(true);

    wrapper.find('Checkboxes').at(0).simulate('click');
    expect(wrapper.find('input').at(0).prop('checked')).toBe(false);
  });

  test('should toggle one Checkbox', () => {
    const wrapper = mount(<Table data={data} onSelect={() => {}} />);

    wrapper.find('Checkboxes').at(2).simulate('click');
    expect(wrapper.find('input').at(2).prop('checked')).toBe(true);

    wrapper.find('Checkboxes').at(2).simulate('click');
    expect(wrapper.find('input').at(2).prop('checked')).toBe(false);
  });
});
