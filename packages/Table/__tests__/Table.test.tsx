import { fireEvent, render } from "@testing-library/react";
import { mount } from 'enzyme';
import expect from 'expect';
import React from 'react';
import Table from '../src';

const data = {
  identification: 'id',
  columns: ['name', 'age'],
  orderBy: ['name', 'age'],
  rows: [
    {
      name: 'Lorem',
      age: 52
    },
    {
      name: 'Ipsum',
      age: 43
    }
  ]
};

const withEmptyRows = {
  identification: 'id',
  columns: ['name', 'age'],
  orderBy: [],
  rows: []
};

const defaultProps = (override = {}) => ({
  data,
  ...override
});

describe('Table component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(<Table {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle multiselect', () => {
    const override = {
      checkboxes: true,
      onSelect: () => ({})
    }

    const { getByTestId } = render(<Table {...defaultProps(override)} />);

    const checkbox = getByTestId('select_all');

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    // wrapper
    //   .find('Checkboxes')
    //   .at(0)
    //   .simulate('click');
    // expect(
    //   wrapper
    //     .find('input')
    //     .at(0)
    //     .prop('checked')
    // ).toBe(true);

    // wrapper
    //   .find('Checkboxes')
    //   .at(0)
    //   .simulate('click');
    // expect(
    //   wrapper
    //     .find('input')
    //     .at(0)
    //     .prop('checked')
    // ).toBe(false);
  });

  test('should toggle one Checkbox', () => {
    const wrapper = mount(<Table checkboxes data={data} onSelect={() => { return; }} />);

    wrapper
      .find('Checkboxes')
      .at(2)
      .simulate('click');
    expect(
      wrapper
        .find('input')
        .at(2)
        .prop('checked')
    ).toBe(true);

    wrapper
      .find('Checkboxes')
      .at(2)
      .simulate('click');
    expect(
      wrapper
        .find('input')
        .at(2)
        .prop('checked')
    ).toBe(false);
  });

  test('should show placeholder if there is no data yet', () => {
    const wrapper = mount(<Table data={withEmptyRows} onSelect={() => { return; }} />);

    expect(wrapper.find('td').text()).toContain('No records available');
  });

  test('Sort should work with numbers', () => {
    const wrapper = mount(<Table data={data} onSelect={() => { return; }} />);

    wrapper.find('#sort_age').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain(43);

    wrapper.find('#sort_age').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain(52);
  });

  test('Sort should work with Letters', () => {
    const wrapper = mount(<Table data={data} onSelect={() => { return; }} />);

    wrapper.find('#sort_name').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain('Ipsum');

    wrapper.find('#sort_name').simulate('click');
    expect(
      wrapper
        .find('tr')
        .at(1)
        .text()
    ).toContain('Lorem');
  });
});