import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';

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

  test('should debounce on first render', () => {
    const { result } = renderHook(() => useDebounce('Hello world', 1000));
    expect(result.current).toBe('Hello world');
  });

  test('should update value after specified delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: '', delay: 500 },
    });

    expect(result.current).toBe('');
    act(() => jest.advanceTimersByTime(510));

    expect(result.current).toBe('');

    rerender({ value: 'Hello World', delay: 500 });

    expect(result.current).toBe('');
    act(() => jest.advanceTimersByTime(498));

    expect(result.current).toBe('');
    act(() => jest.advanceTimersByTime(3));

    expect(result.current).toBe('Hello World');
  });
});
