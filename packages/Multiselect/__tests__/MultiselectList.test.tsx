import '@testing-library/jest-dom/extend-expect';
import { act, fireEvent, render, screen } from '@testing-library/react';

import Multiselect from '../src/MultiSelect';
import React from 'react';
import { props } from './mocks';

class ResizeObserver {
  observe() { }
  unobserve() { }
  disconnect() { }
}

global.ResizeObserver = ResizeObserver;

describe('Multiselect list methods', () => {
  const defaultProps = (override: object = {}) => ({
    name: 'test',
    'data-testid': 'input',
    ...props,
    ...override
  });

  it('should call onItemsRendered when dynamic list opens and scrolls', () => {
    const mockedOnItemsRendered = jest.fn();
    render(
      <Multiselect
        {...defaultProps({
          isDynamic: true,
          onItemsRendered: mockedOnItemsRendered,
        })}
      />
    );

    const input = screen.getByTestId('input');
    act(() => input.focus());

    const dropdown = document.querySelector('.multiselect__dropdown')!;
    fireEvent.scroll(dropdown, { target: { scrollTop: 100 } });

    expect(mockedOnItemsRendered).toHaveBeenCalled();

    const lastArgs = mockedOnItemsRendered.mock.calls[
      mockedOnItemsRendered.mock.calls.length - 1
    ][0];

    expect(lastArgs).toEqual({ startIndex: 0, stopIndex: 2 });
  });
});
