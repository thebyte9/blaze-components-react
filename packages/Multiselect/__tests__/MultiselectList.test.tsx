import Multiselect from '../src/MultiSelect'
import { render, act } from '@testing-library/react'
import { props } from './mocks'
import React from 'react'

jest.mock('react-tiny-virtual-list', () => jest.fn(() => <div>mockedList</div>))

import VirtualList from "react-tiny-virtual-list";

describe('Multiselect list methods', () => {
  const defaultProps = (override = {}) => ({ ...props, ...override })
  it('should call on render items', async () => {
    const mockedOnItemsRendered = jest.fn(() => Promise.resolve({ data: [] }))
    const { getByTestId } = render(<Multiselect {...defaultProps({ onItemsRendered: mockedOnItemsRendered, isDynamic: true })} />)
    const mockedList: any = VirtualList

    act(() => {
      getByTestId('input').focus()
    })

    const [[{ onItemsRendered }]] = mockedList.mock.calls;
    console.log('props.data.data', props.data.data)
    await act(async () => {
      await onItemsRendered({ startIndex: props.data.data.length })
    })

    expect(mockedOnItemsRendered).toHaveBeenCalledWith({ startIndex: 3 })

  })
})