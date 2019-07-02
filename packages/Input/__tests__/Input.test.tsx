import React from 'react';
import expect from 'expect';
import { shallow, render } from 'enzyme';
import Input from '../src';

const testProps = {
  placeholder: 'Placeholder text',
  onChange: () => { }
};

describe('Input component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Input hideTypeToggle type="password" {...testProps} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('visibility should be off', () => {
    const wrapper = render(<Input type="password" required {...testProps} />);

    expect(wrapper.text()).toContain('Show');
    expect(wrapper.text()).toContain('visibility_off');
  });

  test('should renders input with label', () => {
    const wrapper = render(<Input label="Text input label" {...testProps} />);
    expect(wrapper.find('label')).toBeDefined();
  });

  test('should show or hide password on toggle', () => {
    const wrapper = shallow(<Input type="password" {...testProps} />);
    const icon = wrapper.find('.material-icons');

    wrapper.find('.show-hide-password').simulate('click');
    expect(icon.text()).toContain('visibility');

    wrapper.find('.show-hide-password').simulate('click');
    expect(icon.text()).toContain('visibility_off');
  });

  test('should change input', () => {
    const wrapper = shallow(<Input {...testProps} />);

    wrapper.find('input').simulate('change', { target: { value: 'byte9' } });
    expect(wrapper.find('input').prop('value')).toBe('byte9');
  });
});
