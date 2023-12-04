import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import TableBody from '../../../src/TableBody/TableBody';
import { data } from '../../mocks';
import expect from 'expect';

jest.mock('nanoid', () => {
  return {
    nanoid: jest.fn(() => 1),
  };
});

const tableBodyProps = {
  handleSelected: jest.fn(),
  onClickRow: jest.fn(),
  selected: [],
  checkboxes: true,
  columns: data.columns,
  rows: data.rows,
  placeholder: 'table body',
  identification: "id"
}

describe('Table body', () => {
  afterEach(cleanup);

  it('should show placeholder if there is no data yet', () => {
    const placeholder = 'The table is empty of records';
    const { getByText, container } = render(<TableBody {...tableBodyProps} rows={[]} placeholder={placeholder} />);

    getByText(placeholder);
    expect(container).toMatchSnapshot();
  });

  it('should render data and pass it throught virtual list', () => {
    const { container } = render(
      <TableBody
        {...tableBodyProps}
        selected={[]}
        checkboxes={true}
        columns={data.columns}
        rows={data.rows}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should retun row data when clicked clicked', () => {
    const mockedOnClickRow = jest.fn();
    render(
      <TableBody
        {...tableBodyProps}
        onClickRow={mockedOnClickRow}
      />,
    );
    fireEvent.click(screen.getByTestId('tablerow-1'));
    expect(mockedOnClickRow).toHaveBeenCalledTimes(1);
  });
});
