import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import RadioButton from '../RadioButton';

const options = [
  {
    label: 'Example',
    value: 1,
    id: 'one'
  },
  {
    label: 'I accept',
    value: 'accepted',
    required: true,
    id: 'two'
  },
  {
    label: 'Disabled',
    value: '',
    disabled: true,
    id: 'three'
  }
];

describe('RadioButton component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<RadioButton required options={options} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should active RadioButton on click', () => {
    const wrapper = shallow(<RadioButton options={options} />);

    wrapper.find('.form-field').at(0).simulate('click');
    expect(wrapper.find('input').at(0).prop('checked')).toBe(true);

    wrapper.find('.form-field').at(1).simulate('click');
    expect(wrapper.find('input').at(0).prop('checked')).toBe(false);
    expect(wrapper.find('input').at(1).prop('checked')).toBe(true);
    expect(wrapper.find('input').at(2).prop('checked')).toBe(false);
  });

  test('can\'t interact when RadioButton is disabled', () => {
    const wrapper = shallow(<RadioButton options={options} />);

    expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);

    wrapper.find('.form-field').at(2).simulate('click');

    expect(wrapper.find('input').at(2).prop('checked')).toBe(false);
    expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);
  });
});
