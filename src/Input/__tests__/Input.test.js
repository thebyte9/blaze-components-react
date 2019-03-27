
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

  test('todo', () => {
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
  });

  test('todo', () => {
    const wrapper = shallow(<Input onChange={() => {}} {...testProps} />);
    wrapper.find('input').simulate('change');
  });
});
