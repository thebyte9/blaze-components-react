
import React from 'react';
import expect from 'expect';
import { shallow, render } from 'enzyme';
import Input from '../Input';

const testProps = {
  placeholder: 'Placeholder text',
  onChange: () => {}
};

describe('Input component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Input {...testProps} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('visibility should be off', () => {
    const wrapper = render(<Input type="password" {...testProps} />);
    expect(wrapper.text()).toContain('Show');
    expect(wrapper.text()).toContain('visibility_off');
  });

  test('should renders input with label', () => {
    const wrapper = render(<Input label="Text input label" {...testProps} />);
    expect(wrapper.find('label')).toBeDefined;
  });

  test('should show or hide password on toggle', () => {
    const wrapper = shallow(<Input type="password" {...testProps} />);
    wrapper.find('span').simulate('click');
    wrapper.find('span').simulate('click');
    expect(wrapper.children().find('i').length).toBe(1);
  });

  test('should change input', () => {
    const wrapper = shallow(<Input {...testProps} />);
    wrapper.find('input').simulate('change');
  });
});
