import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Checkboxes from '../src/index';

const options = [
  { label: 'Example', value: 1, id: 'one' },
  {
    label: 'I accept',
    value: 'accepted',
    required: true,
    id: 'two'
  },
  {
    label: 'Disabled',
    value: '',
    disabled: true,
    id: 'three'
  }
];

describe('Checkboxes component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Checkboxes options={options} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle checkbox on click', () => {
    const wrapper = shallow(<Checkboxes boolean withEffect options={options} />);

    expect(
      wrapper
        .find('input')
        .at(1)
        .prop('checked')
    ).toBe(false);

    wrapper
      .find('.form-field')
      .at(1)
      .simulate('click');

    expect(
      wrapper
        .find('input')
        .at(1)
        .prop('checked')
    ).toBe(true);
  });

  test("can't interact when checkbox is disabled", () => {
    const wrapper = shallow(<Checkboxes options={options} />);

    expect(
      wrapper
        .find('input')
        .at(2)
        .prop('disabled')
    ).toBe(true);

    wrapper
      .find('.form-field')
      .at(2)
      .simulate('click');

    expect(
      wrapper
        .find('input')
        .at(2)
        .prop('checked')
    ).toBe(false);
    expect(
      wrapper
        .find('input')
        .at(2)
        .prop('disabled')
    ).toBe(true);
  });
});
