import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import TableBody from '../../../src/TableBody/TableBody';
import { data } from '../../mocks';
import expect from 'expect';

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

  describe('row identity across re-renders', () => {
    const withButtons = (rows: typeof data.rows) =>
      rows.map((row) => ({ ...row, name: <button type="button">{row.name}</button> }));

    it('keeps each row DOM node when the parent re-renders with fresh row objects', () => {
      const { rerender } = render(<TableBody {...tableBodyProps} rows={withButtons(data.rows)} />);
      const before = [screen.getByTestId('tablerow-0'), screen.getByTestId('tablerow-1')];

      rerender(<TableBody {...tableBodyProps} rows={withButtons(data.rows)} />);

      expect(screen.getByTestId('tablerow-0')).toBe(before[0]);
      expect(screen.getByTestId('tablerow-1')).toBe(before[1]);
    });

    it('keeps focus inside a row across a parent re-render', () => {
      const { rerender } = render(<TableBody {...tableBodyProps} rows={withButtons(data.rows)} />);
      const button = screen.getByRole('button', { name: 'Ipsum' });
      button.focus();

      rerender(<TableBody {...tableBodyProps} rows={withButtons(data.rows)} />);

      expect(document.activeElement).toBe(button);
      expect(screen.getByRole('button', { name: 'Ipsum' })).toBe(button);
    });

    it('follows a row by its identification when rows are reordered', () => {
      const { rerender } = render(<TableBody {...tableBodyProps} />);
      const second = screen.getByTestId('tablerow-1');

      rerender(<TableBody {...tableBodyProps} rows={[...data.rows].reverse()} />);

      expect(screen.getByTestId('tablerow-0')).toBe(second);
    });

    it('falls back to the index when a row has no identification value', () => {
      const rows = data.rows.map(({ name, age }) => ({ name, age }));
      const { rerender } = render(<TableBody {...tableBodyProps} rows={rows} />);
      const before = screen.getByTestId('tablerow-1');

      rerender(<TableBody {...tableBodyProps} rows={rows.map((row) => ({ ...row }))} />);

      expect(screen.getByTestId('tablerow-1')).toBe(before);
    });
  });
});
