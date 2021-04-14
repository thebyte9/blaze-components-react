import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Modal from '../src/Modal';
import React from 'react';

const props = {
  actions: [],
  buttonText: 'Simple modal',
  isSimple: true,
  onChange: () => void 0,
  onClose: jest.fn(),
};

const defaultProps = (override: object = {}) => ({
  ...props,
  ...override,
});

describe('Modal component', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Modal {...defaultProps()} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('should close modal on overlay clicked', () => {
    const { asFragment } = render(<Modal {...defaultProps()} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('should render and close alert modal', () => {
    const actions = [
      {
        callback: () => ({}),
        modifiers: ['alert', 'small'],
        textButton: 'delete',
      },
    ];
    const override = {
      actions,
      isAlert: true,
    };
    const { asFragment } = render(<Modal {...defaultProps(override)} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('should render and close alert modal on press escape key', () => {
    const map: any = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    document.removeEventListener = jest.fn((event, callback) => {
      map[event] = undefined;
    });

    const actions = [
      {
        callback: () => ({}),
        modifiers: ['alert', 'small'],
        textButton: 'delete',
      },
    ];

    const override = {
      actions,
      isAlert: true,
    };

    render(<Modal {...defaultProps(override)} />);
  });

  it('should render and close scrollable modal', () => {
    const actions = [
      {
        callback: () => ({}),
        textButton: 'Action 1',
      },
      {
        callback: () => ({}),
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
