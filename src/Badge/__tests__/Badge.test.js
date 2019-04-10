import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Badge from '../Badge';

describe('Badge component', () => {
  test('should render badge type link', () => {
    const wrapper = shallow(<Badge type="alert" round link>Ipsum</Badge>);
    const link = wrapper.find('a');
    expect(link.text()).toContain('Ipsum');
  });

  test('should render badge type span', () => {
    const wrapper = shallow(<Badge type="info" icon pill>Dolor</Badge>);
    const span = wrapper.find('span');
    expect(span.text()).toContain('Dolor');
  });

  test('should render badge without type', () => {
    const wrapper = shallow(<Badge>Test Badge</Badge>);
    expect(wrapper.prop('className')).toContain('badge');
  });
});
