import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Badge from '../Badge';

describe('Alert component', () => {
  test('should render badge link rounded', () => {
    const wrapper = shallow(<Badge type="alert" round link>Ipsum</Badge>);
    const link = wrapper.find('a');
    expect(link.text()).toContain('Ipsum');
  });

  test('should render span pill badge', () => {
    const wrapper = shallow(<Badge type="info" icon pill>Dolor</Badge>);
    const span = wrapper.find('.badge--info');
    expect(span.text()).toContain('Dolor');
  });
});
