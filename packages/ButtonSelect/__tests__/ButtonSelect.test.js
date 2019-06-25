import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Button from '@blaze-react/button';
import ButtonSelect from '../src/index';

const component = (
  <ButtonSelect text="Actions">
    <Button modifiers="plain">Settings</Button>
    <Button modifiers="plain">Sign out</Button>
  </ButtonSelect>
);

describe('ButtonSelect component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(component);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
