import { shallow } from 'enzyme';
import expect from 'expect';
import React from 'react';
import Textarea from '../src';

const defaultProps = (override = {}) => ({
  label: 'Simple extarea',
  onChange: () => ({}),
  ...override
});

describe('Textarea component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Textarea {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should change textarea content', () => {
    const override = {
      required: true
    };

    const wrapper = shallow(<Textarea {...defaultProps(override)} />);

    wrapper.find('textarea').simulate('change', { target: { value: 'byte9' } });
    expect(wrapper.find('textarea').prop('value')).toBe('byte9');
  });

  test('content length should be equal to limit', () => {
    const override = {
      limit: 11
    };

    const wrapper = shallow(<Textarea {...defaultProps(override)} />);

    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'lorem ipsum dolor sit amet' } });
    expect(wrapper.find('textarea').prop('value')).toBe('lorem ipsum');

    const total = wrapper.find('span');
    expect(total.text()).toContain(0);
  });
});
