import { act, render } from '@testing-library/react';

import Multiselect from '../src/MultiSelect';
import React from 'react';
import VirtualList from 'react-tiny-virtual-list';
import { props } from './mocks';

jest.mock('react-tiny-virtual-list', () => jest.fn(() => <div>mockedList</div>));


describe('Multiselect list methods', () => {
  const defaultProps = (override = {}) => ({ ...props, ...override });
  it('should call on render items', async () => {
    const mockedOnItemsRendered = jest.fn(() => Promise.resolve({ data: [] }));
    const { getByTestId } = render(
      <Multiselect {...defaultProps({ onItemsRendered: mockedOnItemsRendered, isDynamic: true })} />,
    );
    const mockedList: any = VirtualList;

    act(() => {
      getByTestId('input').focus();
    });

    const [[{ onItemsRendered }]] = mockedList.mock.calls;
    await act(async () => {
      await onItemsRendered({ startIndex: props.data.data.length });
    });

    expect(mockedOnItemsRendered).toHaveBeenCalledWith({ startIndex: 3 });
  });
});
