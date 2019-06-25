import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Textarea from '../src';

describe('Textarea component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Textarea />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should change textarea content', () => {
    const wrapper = shallow(<Textarea label="Simple extarea" required />);

    wrapper.find('textarea').simulate('change', { target: { value: 'byte9' } });
    expect(wrapper.find('textarea').prop('value')).toBe('byte9');
  });

  test('content length should be equal to limit', () => {
    const wrapper = shallow(<Textarea label="Simple extarea" limit={11} />);

    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'lorem ipsum dolor sit amet' } });
    expect(wrapper.find('textarea').prop('value')).toBe('lorem ipsum');

    const total = wrapper.find('span');
    expect(total.text()).toContain(0);
  });
});
