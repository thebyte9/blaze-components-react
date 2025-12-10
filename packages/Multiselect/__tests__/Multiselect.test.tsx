import '@testing-library/jest-dom';
import { act, fireEvent, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Multiselect from '../src/MultiSelect';
import React from 'react';
import { props } from './mocks';

class ResizeObserver {
  observe() { }
  unobserve() { }
  disconnect() { }
}

global.ResizeObserver = ResizeObserver;

const defaultProps = (override: object = {}) => ({
  'data-testid': 'input',
  ...props,
  ...override,
});

describe('Multiselect component', () => {
  it('matches snapshot (closed)', () => {
    const { container } = render(
      <Multiselect name="test" {...defaultProps()} />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot when opened', () => {
    const { container } = render(
      <Multiselect name="test" {...defaultProps()} />
    );
    act(() => {
      screen.getByTestId('input').focus();
    });
    expect(container).toMatchSnapshot();
  });

  it('selects first option and clears the search input', () => {
    render(<Multiselect name="test" {...defaultProps()} />);
    const input = screen.getByTestId('input');
    input.focus();

    userEvent.type(input, 'abc');
    fireEvent.change(input, { target: { value: '' } });

    userEvent.click(screen.getByTestId('checkbox-2'));

    expect(screen.getAllByText(/Blaze 1/i)).toHaveLength(2);

    expect(input).toHaveValue('');
  });

  it('re-renders when props update', () => {
    const { rerender } = render(
      <Multiselect name="test" {...defaultProps()} />
    );

    const newData = {
      data: {
        data: [
          {
            id: 1,
            name: 'Blaze 11',
            description: 'Lorem ipsum dolor.',
            checked: false,
            show: true,
          },
        ],
        filterBy: ['name', 'id'],
        identification: 'id',
        keyValue: 'name',
      },
    };

    rerender(<Multiselect name="test" {...defaultProps(newData)} />);
  });

  it('handles delete via chip icon', () => {
    const mockedGetSelected = jest.fn();
    const { container } = render(
      <Multiselect
        name="test"
        {...defaultProps({ getSelected: mockedGetSelected })}
      />
    );
    act(() => {
      screen.getByTestId('input').focus();
    });

    const [delIcon] = container.querySelectorAll('.chip__icon--delete');
    fireEvent.click(delIcon);

    expect(mockedGetSelected).toHaveBeenCalledWith({
      event: { target: { name: 'test', value: [2] } },
    });
  });

  it('calls onItemsRendered when dynamic and scrolling', () => {
    const onItemsRendered = jest.fn();
    const length = 100;
    const data = Array.from({ length }).map((_, i) => ({
      id: i,
      name: `Name ${i}`,
      show: true,
    }));
    const override = {
      data: {
        data,
        filterBy: ['name'],
        identification: 'id',
        keyValue: 'name',
      },
      isDynamic: true,
      onItemsRendered,
    };

    const { container } = render(
      <Multiselect name="test" {...defaultProps(override)} />
    );
    const input = screen.getByTestId('input');
    fireEvent.focus(input);

    const dropdown = container.querySelector('.multiselect__dropdown')!;
    fireEvent.scroll(dropdown);

    expect(onItemsRendered).toHaveBeenCalled();
    const lastArgs = onItemsRendered.mock.calls[
      onItemsRendered.mock.calls.length - 1
    ][0];
    expect(lastArgs).toEqual({
      startIndex: 0,
      stopIndex: 11,
    });
  });
});