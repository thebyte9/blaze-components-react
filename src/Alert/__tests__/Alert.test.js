import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Alert from '../Alert';

describe('Button component', () => {
  const wrapper = shallow(<Alert />);

  test('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
