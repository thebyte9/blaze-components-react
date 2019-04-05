import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import RadioButton from '../RadioButton';

const options = [
  { label: 'Example', value: 1 },
  { label: 'I accept', value: 'accepted', required: true },
  { label: 'Disabled', value: '', disabled: true }
];

describe('RadioButton component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<RadioButton options={options} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should active RadioButton on click', () => {
    const wrapper = shallow(<RadioButton options={options} />);

    wrapper.find('span').at(0).simulate('click');
    expect(wrapper.find('input').at(0).prop('checked')).toBe(true);

    wrapper.find('span').at(1).simulate('click');
    expect(wrapper.find('input').at(0).prop('checked')).toBe(false);
    expect(wrapper.find('input').at(1).prop('checked')).toBe(true);
    expect(wrapper.find('input').at(2).prop('checked')).toBe(false);
  });

  test('can\'t interact when RadioButton is disabled', () => {
    const wrapper = shallow(<RadioButton options={options} />);

    expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);

    wrapper.find('span').at(2).simulate('click');

    expect(wrapper.find('input').at(2).prop('checked')).toBe(false);
    expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);
  });
});
