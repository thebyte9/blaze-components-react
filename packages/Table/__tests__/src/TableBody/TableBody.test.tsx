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

describe('Table body', () => {
  afterEach(cleanup);

  it('should show placeholder if there is no data yet', () => {
    const placeholder = 'The table is empty of records';
    const { getByText, container } = render(<TableBody rows={[]} placeholder={placeholder} />);

    getByText(placeholder);
    expect(container).toMatchSnapshot();
  });

  it('should render data and pass it throught virtual list', () => {
    const { container } = render(
      <TableBody
        selected={[]}
        onItemsRendered={jest.fn}
        checkboxes={true}
        columns={data.columns}
        rows={data.rows}
        bodyRef={{ offsetHeight: 1000 }}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should retun row data when clicked clicked', () => {
    const mockedOnClickRow = jest.fn();
    const { getByTestId } = render(
      <TableBody
        handleSelected={jest.fn()}
        onClickRow={mockedOnClickRow}
        selected={[]}
        onItemsRendered={jest.fn}
        checkboxes={true}
        columns={data.columns}
        rows={data.rows}
        bodyRef={{ offsetHeight: 1000 }}
      />,
    );
    fireEvent.click(screen.getByTestId('tablerow-1'));
  });
});
