import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import More from '../src';

describe('More component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(
      <More isMoreMenu>
        <More.Avatar isMoreMenu>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle on click', () => {
    const wrapper = mount(
      <More isMoreMenu>
        <More.Avatar isHeader>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find('ul')
        .at(0)
        .hasClass('more-menu__list')
    ).toBe(true);
  });
});
