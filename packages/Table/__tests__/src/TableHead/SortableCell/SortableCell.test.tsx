import { cleanup, fireEvent, render } from '@testing-library/react';
import expect from 'expect';
import React from 'react';
import SortableCell from '../../../../src/TableHead/SortableCell/SortableCell';
import { data } from '../../../mocks';

const renderCell = (props = {}) => {
  const onSort = jest.fn();
  const result = render(
    <SortableCell
      appliedSort={null}
      onSort={onSort}
      orderBy={data.orderBy}
      column="name"
      columns={data.columns}
      labels={data.labels}
      {...props}
    />,
  );

  return { ...result, onSort };
};

describe('Sortable cell', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(SortableCell).toBeDefined();
  });

  it('should render without throwing error', () => {
    const { container } = renderCell({ column: data.columns[0] });

    expect(container).toMatchSnapshot();
  });

  it('should toggle the applied sort direction when the label is clicked', () => {
    const { getByTestId, onSort } = renderCell({ appliedSort: { name: 'asc' } });

    fireEvent.click(getByTestId('sortby-name'));

    expect(onSort).toHaveBeenCalledWith({ name: 'desc' });
  });

  it('should sort when the arrow is clicked', () => {
    const { container, onSort } = renderCell();

    fireEvent.click(container.querySelector('.sortable__arrow') as Element);

    expect(onSort).toHaveBeenCalledWith({ name: 'asc' });
  });

  it('should sort when the cell outside the label is clicked', () => {
    const { getByRole, onSort } = renderCell();

    fireEvent.click(getByRole('button'));

    expect(onSort).toHaveBeenCalledWith({ name: 'asc' });
  });

  it('should mark a sortable cell as a focusable button', () => {
    const { getByRole } = renderCell();
    const cell = getByRole('button');

    expect(cell.className).toBe('sortable sortable--enabled');
    expect(cell.getAttribute('tabindex')).toBe('0');
  });

  it('should flag the sorted column and point the arrow down when descending', () => {
    const { getByRole, container } = renderCell({ appliedSort: { name: 'desc' } });

    expect(getByRole('button').className).toContain('sortable--active');
    expect(container.querySelector('.sortable__arrow')?.textContent).toBe('keyboard_arrow_down');
  });

  it.each(['Enter', ' '])('should sort on the %p key', (key) => {
    const { getByRole, onSort } = renderCell();

    fireEvent.keyDown(getByRole('button'), { key });

    expect(onSort).toHaveBeenCalledWith({ name: 'asc' });
  });

  it('should ignore other keys', () => {
    const { getByRole, onSort } = renderCell();

    fireEvent.keyDown(getByRole('button'), { key: 'a' });

    expect(onSort).not.toHaveBeenCalled();
  });

  it('should render a column that is not sortable as plain text', () => {
    const { container, queryByRole, getByTestId, onSort } = renderCell({
      column: 'id',
    });

    fireEvent.click(getByTestId('sortby-id'));

    expect(queryByRole('button')).toBeNull();
    expect(container.querySelector('.sortable__arrow')).toBeNull();
    expect(onSort).not.toHaveBeenCalled();
  });
});
