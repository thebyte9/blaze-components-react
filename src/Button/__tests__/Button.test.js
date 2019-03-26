import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Button from '../Button';

const testProps = {
  className: 'test'
};

describe('ForgotenPassword component', () => {
  const wrapper = shallow(<Button {...testProps} />);

  test('ForgottenPassword component should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  test('should render without throwing an error', () => {
    expect(wrapper.is('.test')).toBe(true);
  });

  test('renders correctly (snapshot)', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
