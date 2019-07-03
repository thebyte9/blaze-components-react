import { shallow } from 'enzyme';
import expect from 'expect';
import React from 'react';
import Breadcrumb from '../src';

const defaultProps = (override = {}) => ({
  children: [
    <a href="#first">First</a>,
    <a href="#Second">Second</a>,
    <a href="#Third">Third - long text will be truncated for a better user experience</a>
  ],
  ...override
});

const wrapper = (props: any) => shallow(<Breadcrumb {...props} />);

describe('Breadcrumb component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const _wrapper = wrapper(defaultProps());

    expect(_wrapper).toBeDefined();
    expect(_wrapper).toMatchSnapshot();
  });

  test('should renders correctly with one children', () => {
    const children = <a href="#first">First</a>;
    const _wrapper = wrapper(defaultProps({ children }));

    expect(_wrapper).toBeDefined();
    expect(_wrapper).toMatchSnapshot();
  });
});
