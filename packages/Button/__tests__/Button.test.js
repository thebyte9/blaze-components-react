import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Button from '../src/index';

const testProps = {
  modifiers: 'outline rounded'
};

describe('Button component', () => {
  const wrapper = shallow(<Button {...testProps} />);

  test('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  test('should render without throwing an error', () => {
    expect(wrapper.is('.button')).toBe(true);
  });

  test('should be type button by default', () => {
    expect(wrapper.props().type).toBe('button');
  });

  test('should renders correctly (snapshot)', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be type submit when passing isSubmit prop', () => {
    expect(shallow(<Button submit />).props().type).toBe('submit');
  });
});
