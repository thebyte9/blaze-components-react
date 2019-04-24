import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Avatar from '../Avatar';

const url = 'http://lorempixel.com/400/400/people/';

describe('Avatar component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(<Avatar url={url} modifier="med" />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should be defined and renders also when the image does not load', () => {
    const wrapper = mount(<Avatar url={`notFound/${url}`} modifier="med" />);
    expect(wrapper).toBeDefined();
  });

  test('The text of the avatar must be the initials of the username', () => {
    const wrapper = mount(<Avatar username="Blaz 2" />);
    const span = wrapper.find('span');
    expect(span.text()).toContain('B2');
  });
});
