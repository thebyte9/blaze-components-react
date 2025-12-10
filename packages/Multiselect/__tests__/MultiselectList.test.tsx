import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Multiselect from '../src/MultiSelect';
import React from 'react';
import { props } from './mocks';

class ResizeObserver {
  observe() { }
  unobserve() { }
  disconnect() { }
}
(global as any).ResizeObserver = ResizeObserver;

const makeState = (total = 5, checked = 5) => ({
  filterBy: ['name', 'description'],
  identification: 'id',
  keyValue: 'name',
  data: Array.from({ length: total }, (_, i) => ({
    checked: i < checked,
    description: `desc-${i}`,
    id: `id-${i}`,
    name: `Name ${i}`,
    show: true,
  })),
});

const getChipNodes = () =>
  document.querySelectorAll('.multiselect__input__container__chips .chip__label');

describe('Multiselect list methods', () => {
  const defaultProps = (override: object = {}) => ({
    name: 'test',
    'data-testid': 'input',
    ...props,
    ...override,
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

    const lastArgs =
      mockedOnItemsRendered.mock.calls[mockedOnItemsRendered.mock.calls.length - 1][0];

    expect(lastArgs).toEqual({ startIndex: 0, stopIndex: 2 });
  });

  it('shows only 1 chip and an N more counter when checkedPreviewCount=1', async () => {
    render(
      <Multiselect
        {...defaultProps({
          data: makeState(5, 5),
          checkedPreviewCount: 1,
        })}
      />
    );

    await waitFor(() => {
      expect(getChipNodes().length).toBe(1);
    });

    expect(await screen.findByText('4 more')).toBeInTheDocument();
  });

  it('shows all chips when checkedPreviewCount is not set', async () => {
    render(
      <Multiselect
        {...defaultProps({
          data: makeState(3, 3),
        })}
      />
    );

    await waitFor(() => {
      expect(getChipNodes().length).toBe(3);
    });

    expect(screen.queryByText(/more$/)).not.toBeInTheDocument();
  });
});
