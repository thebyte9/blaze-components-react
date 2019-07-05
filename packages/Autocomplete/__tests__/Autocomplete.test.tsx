// tslint:disable-next-line: ordered-imports
import { fireEvent, render } from "@testing-library/react";
import { mount } from 'enzyme';
import expect from 'expect';
import React from 'react';
import Autocomplete from '../src';

const data = {
  data: [
    {
      id: 1,
      name: "Laravel",
      description: "PHP framework"
    },
    {
      id: 2,
      name: "React",
      description: "Javascript library"
    },
    {
      id: 3,
      name: "Adonis",
      description: "Javascript framework"
    }
  ],
  filterBy: ['name', 'description'],
  keyValue: 'name',
};


const defaultProps = (override = {}) => ({
  data,
  ...override
});

const AutocompleteComponent = <Autocomplete {...defaultProps()} />;

describe('Autocomplete component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = mount(AutocompleteComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should allow to filter', () => {
    const { getByDisplayValue, getByTestId, getByPlaceholderText } = render(AutocompleteComponent);

    const input = getByPlaceholderText('Search');

    fireEvent.change(input, {
      target: {
        value: 'php'
      }
    });

    const button = getByTestId('option-1');

    fireEvent.click(button);

    getByDisplayValue('Laravel');

  });
});

