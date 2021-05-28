import '@testing-library/jest-dom/extend-expect';
import { act, fireEvent, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Multiselect from '../src/MultiSelect';
import React from 'react';
import { props } from './mocks';

const defaultProps = (override: object = {}) => ({
  ...props,
  ...override,
});

describe('Multiselect component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { container } = render(<Multiselect name="test" {...defaultProps()} />);

    expect(container).toMatchSnapshot();
  });

  it('should be defined and renders correctly when is opened (snapshot)', () => {
    const { container, getByTestId } = render(<Multiselect name="test" {...defaultProps()} />);

    act(() => {
      getByTestId('input').focus();
    });

    expect(container).toMatchSnapshot();
  });

  it('should select first option and empty the search input', () => {
    render(<Multiselect name="test" {...defaultProps()} />);

    // userEvent.click(screen.getByRole('input'));

    // wrapper.find('input').at(0).simulate('focus');

    // wrapper
    //   .find('input')
    //   .at(0)
    //   .simulate('change', {
    //     target: { value: 'abc' },
    //   });

    // wrapper.find('.form-field--checkbox .form-checkbox').at(0).simulate('click');

    // expect(wrapper.find('div').at(0).text()).toContain('Blaze 1');

    // expect(wrapper.find('input').at(0).props().value).toEqual('');
  });

  it('should rerender on receive props', () => {
    const { rerender } = render(<Multiselect name="test" {...defaultProps()} />);

    const override = {
      data: {
        filterBy: ['name', 'id'],
        identification: 'id',
        keyValue: 'name',
        data: [
          {
            checked: false,
            show: true,
            id: 1,
            name: 'Blaze 11',
            description: 'Lorem ipsum dolor.',
          },
        ],
      },
    };

    rerender(<Multiselect name="test" {...defaultProps(override)} />);
  });

  it('should handle delete', () => {
    const mockedGetSelected = jest.fn();
    const { getByTestId, container } = render(
      <Multiselect name="test" {...defaultProps({ getSelected: mockedGetSelected })} />,
    );
    act(() => {
      getByTestId('input').focus();
    });
    act(() => {
      const [element] = container.querySelectorAll('.chip__icon--delete');
      fireEvent(element, new MouseEvent('click', { bubbles: true, cancelable: false }));
    });
    expect(mockedGetSelected).toHaveBeenCalledWith({
      event: {
        target: {
          name: 'test',
          value: [2],
        },
      },
    });
  });

  it('should use onItemsRendered hook', async () => {
    const onItemsRendered = jest.fn();
    const length = 100;
    const data = Array.from({ length }).map((_, index) => ({ id: index, name: `Name ${index}`, show: true }));
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

    const { getByTestId, container } = render(<Multiselect name="test" {...override} />);
    const input = getByTestId('input');
    fireEvent.focus(input);
    const [element] = container.querySelectorAll('.multiselect__dropdown');
    fireEvent.scroll(element);
    expect(onItemsRendered).toHaveBeenCalledWith({ startIndex: 0, stopIndex: 20 });
  });
});
