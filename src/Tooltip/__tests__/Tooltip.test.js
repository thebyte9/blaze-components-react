import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Tooltip from '../Tooltip';

describe('Tooltip component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Tooltip text="Byte9" />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
