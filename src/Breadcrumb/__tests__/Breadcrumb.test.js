import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Breadcrumb from '../Breadcrumb';

describe('Breadcrumb component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(
      <Breadcrumb>
        <a href="#first">First</a>
        <a href="#Second">Second</a>
        <a href="#Third">Third - long text will be truncated for a better user experience</a>
      </Breadcrumb>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
