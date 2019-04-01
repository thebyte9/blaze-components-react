import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Select from '../Select';

const arrayOfObjects = [
  {
    id: 1,
    username: 'Oscar'
  },
  {
    id: 2,
    username: 'Ismael'
  }
];

describe('Input component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should be disabled when none options', () => {
    const wrapper = shallow(<Select label="Select label" required />);
    expect(wrapper.find('select').prop('disabled')).toBe(true);
  });

  test('should render simple array of options', () => {
    const wrapper = shallow(<Select options={['lorem', 'ipsum']} />);
    wrapper.find('select').simulate('change', { target: { value: 'ipsum' } });
    expect(wrapper.find('select').prop('defaultValue')).toBe('ipsum');
  });

  test('should render array of array options', () => {
    const wrapper = shallow(<Select options={[['08001', 'Barcelona']]} />);
    wrapper.find('select').simulate('change', { target: { value: '08001' } });
    expect(wrapper.find('select').prop('defaultValue')).toBe('08001');
  });

  test('should render array of object options', () => {
    const wrapper = shallow(<Select options={arrayOfObjects} keys={['id', 'username']} />);
    wrapper.find('select').simulate('change', { target: { value: 1 } });
    expect(wrapper.find('select').prop('defaultValue')).toBe(1);
  });
});
