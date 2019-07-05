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
      id: 1,
      name: 'Lorem',
      age: 52
    },
    {
      id: 2,
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

const defaultProps = (override: object = {}) => ({
  checkboxes: false,
  data,
  ...override
});

describe('Table component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(<Table {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle multiselect and one by one', () => {
    let selectedRows: [] = [];

    const onSelect = (selected: []) => {
      selectedRows = selected;
    }
    const override = {
      checkboxes: true,
      onSelect
    }

    const { getByTestId } = render(<Table {...defaultProps(override)} />);

    fireEvent.click(getByTestId('select_all'));
    expect(selectedRows).toEqual([1, 2]);

    fireEvent.click(getByTestId('select_all'));
    expect(selectedRows).toEqual([]);

    fireEvent.click(getByTestId('row-checkbox-1'));
    expect(selectedRows).toEqual([1]);

    fireEvent.click(getByTestId('row-checkbox-1'));
    expect(selectedRows).toEqual([]);

  });


  test('should show placeholder if there is no data yet', () => {
    const placeholder = 'The table is empty of records';

    let override = {
      data: withEmptyRows,
      placeholder,
    }

    const { getByText, rerender } = render(<Table {...defaultProps(override)} />);

    getByText(placeholder);

    override = {
      ...override,
      ...{
        checkboxes: true
      }
    };

    rerender(<Table {...defaultProps(override)} />);

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