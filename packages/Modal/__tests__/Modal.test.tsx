import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Modal from '../src/Modal';
import React from 'react';

const props = {
  actions: [],
  buttonText: 'Simple modal',
  isSimple: true,
  onClose: jest.fn(),
};

const defaultProps = (override: object = {}) => ({
  ...props,
  ...override,
});

describe('Modal component', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should match snapshot', () => {
    const { asFragment } = render(<Modal {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render overlay', () => {
    const override = {
      overlay: true,
    };
    const { asFragment } = render(<Modal {...defaultProps(override)} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should close modal on overlay clicked', () => {
    const { asFragment } = render(<Modal {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render and close alert modal', () => {
    const actions = [
      {
        callback: jest.fn(),
        modifiers: ['alert', 'small'],
        textButton: 'delete',
      },
    ];
    const override = {
      actions,
      isAlert: true,
    };
    const { asFragment } = render(<Modal {...defaultProps(override)} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render and close alert modal on press escape key', () => {
    const actions = [
      {
        callback: jest.fn(),
        modifiers: ['alert', 'small'],
        textButton: 'delete',
      },
    ];

    const override = {
      actions,
      isAlert: false,
    };

    const { getByText } = render(<Modal {...defaultProps(override)} />);

    fireEvent.keyDown(getByText(/No content/i), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(props.onClose).toHaveBeenCalled();
  });

  it('should close the modal when overlay is clicked', () => {
    const actions = [
      {
        callback: jest.fn(),
        modifiers: ['alert', 'small'],
        textButton: 'delete',
      },
    ];

    const override = {
      actions,
      isAlert: false,
      overlay: true,
    };

    render(<Modal {...defaultProps(override)} />);

    const overlay = screen.getByTestId('overlay');
    fireEvent.click(overlay);
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should render and close scrollable modal', () => {
    const actions = [
      {
        callback: jest.fn(),
        textButton: 'Action 1',
      },
      {
        callback: jest.fn(),
        textButton: 'Action 2',
      },
    ];

    const override = {
      actions,
      onClose: undefined,
      title: 'Scrollable Modal',
    };

    render(<Modal {...defaultProps(override)} />);
  });
});
