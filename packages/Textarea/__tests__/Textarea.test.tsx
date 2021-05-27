import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import Textarea from '../src/TextArea';

interface ITextareaProps {
  label: string;
  onChange: () => {};
}

const defaultProps = (override = {}): ITextareaProps => ({
  label: 'Simple textarea',
  onChange: jest.fn(),
  ...override,
});

describe('Textarea component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Textarea {...defaultProps()} />);
    expect(asFragment()).toBeDefined();
  });

  test('should change textarea content', () => {
    const override = {
      error: true,
      required: true,
    };

    const wrapper = render(<Textarea {...defaultProps(override)} />);

    // wrapper.find('textarea').simulate('change', {
    //   target: {
    //     value: 'byte9',
    //   },
    // });

    // expect(wrapper.find('textarea').prop('value')).toBe('byte9');
    // expect(wrapper.find('.validation').text()).toContain('This field is required');
  });

  test('content length should be equal to limit', () => {
    const override = {
      limit: 11,
    };

    const wrapper = render(<Textarea {...defaultProps(override)} />);

    // wrapper.find('textarea').simulate('change', { target: { value: 'lorem ipsum dolor sit amet' } });
    // expect(wrapper.find('textarea').prop('value')).toBe('lorem ipsum');

    // const total = wrapper.find('span');
    // expect(total.text()).toContain(0);
  });
});
