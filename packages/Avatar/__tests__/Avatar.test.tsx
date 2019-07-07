// import { render } from "@testing-library/react";
import { mount } from 'enzyme';
import expect from 'expect';
import React from 'react';
import Avatar from '../src';

declare let window: any;

const url = 'http://lorempixel.com/400/400/people/';

const defaultProps = (override: object = {}) => ({
  modifier: 'med',
  url,
  username: 'Blaze 2',
  ...override
});

describe('Avatar component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(<Avatar {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should load image', () => {
    const dummyImage = {
      addEventListener: jest.fn((_, evtHandler) => { evtHandler(); }),
    };

    window.Image = jest.fn(() => dummyImage);

    const wrapper = mount(<Avatar {...defaultProps()} />);

    const image = wrapper.find('img');

    expect(image.prop('src')).toContain(url);
  });

  test('should be defined and renders also when the image does not load', () => {
    const wrapper = mount(<Avatar url={`notFound/${url}`} modifier="med" />);
    expect(wrapper).toBeDefined();
  });

  test('The text of the avatar must be the initials of the username', () => {
    const overrid = {
      modifier: '',
      url: ''
    };

    const wrapper = mount(<Avatar {...defaultProps(overrid)} />);
    const span = wrapper.find('span');
    expect(span.text()).toContain('B2');
  });
});
