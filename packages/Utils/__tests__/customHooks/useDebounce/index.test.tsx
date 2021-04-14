import '@testing-library/jest-dom';

import { act, renderHook } from '@testing-library/react-hooks';

import React from 'react';
import useDebounce from '../../../src/customHooks/useDebounce';

jest.useFakeTimers();

describe('useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useDebounce('Hello world', 1000));
    expect(result.current).toBe('Hello world');
  });
});
