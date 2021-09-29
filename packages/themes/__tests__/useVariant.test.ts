import { renderHook } from '@testing-library/react-hooks';
import { useVariant } from '../src/hooks/useVariant';
import { theme } from '../__mocks__/theme';

describe('useVariant hook', () => {
  test('it should return the secondary variant', () => {
    const { result } = renderHook(() =>
      useVariant({ theme: theme, component: 'button', variant: 'default', element: 'container' }),
    );
    expect(result.current).toStrictEqual([
      'font-manrope',
      'font-medium',
      'rounded-button',
      'bg-button-primary',
      'text-button-primary',
      'px-6',
      'py-1',
      'min-w-min',
      'dark:bg-gray-800',
      'dark:text-button-primary',
      'hover:bg-button-hover',
      'focus:outline-none',
      'active:bg-button-pressed',
      'disabled:text-button-disabled',
      'disabled:bg-button-disabled', 
      'disabled:cursor-not-allowed',
      'disabled:border-button-disabled',
    ]);
  });

  test('it should return default variant if variant is not passed as parameter', () => {
    const { result } = renderHook(() =>
      useVariant({ theme: theme, component: 'button', variant: 'secondary', element: 'container' }),
    );
    expect(result.current).toStrictEqual([
      'font-manrope',
      'font-medium',
      'text-bold',
      'rounded-button',
      'bg-button-outlined',
      'text-button-outlined',
      'px-6',
      'py-1',
      'min-w-min',
      'dark:bg-gray-800',
      'dark:text-button-primary',
      'border-2',
      'border-button-outlined',
      'hover:bg-button-outlined-hover',
      'hover:text-button-primary',
      'focus:outline-none',
      'active:bg-button-pressed',
      'active:border-button-outlined-pressed',
      'disabled:text-button-outlined-disabled',
      'disabled:bg-button-outlined-disabled',
      'disabled:cursor-not-allowed',
      'disabled:border-button-disabled',
    ]);
  });
});
