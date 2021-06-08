import { fireEvent, render, screen } from '@testing-library/react';

import Autocomplete from '../src';
import React from 'react';

const data = {
  data: [
    {
      id: 1,
      name: 'Laravel',
      description: 'PHP framework',
    },
    {
      id: 2,
      name: 'React',
      description: 'Javascript library',
    },
    {
      id: 3,
      name: 'Adonis',
      description: 'Javascript framework',
    },
  ],
  filterBy: ['name', 'description'],
  keyValue: 'name',
};

const AutoCompleteComponent = <Autocomplete data={data} />;

describe('Autocomplete component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(AutoCompleteComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should allow to filter', async () => {
    const { getByText, getByPlaceholderText } = render(AutoCompleteComponent);

    const input = getByPlaceholderText('Search');

    fireEvent.change(input, {
      target: {
        value: 'php',
      },
    });

    expect(getByText('Laravel')).not.toBe(null);
  });

  it('should handle click event', () => {
    const { getByPlaceholderText } = render(AutoCompleteComponent);

    const input = getByPlaceholderText('Search');

    fireEvent.change(input, {
      target: {
        value: 'a',
      },
    });

    const option = screen.getByTestId('option-0');
    fireEvent.click(option);
  });
});
