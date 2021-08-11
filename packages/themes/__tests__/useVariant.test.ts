import { renderHook } from '@testing-library/react-hooks';
import { useVariant } from '../src/hooks/useVariant';
import { theme } from '../__mocks__/theme';

describe('useVariant hook', () => {
  test('it should return the secondary variant', () => {
    const { result } = renderHook(() => useVariant(theme, 'button', 'secondary', 'container'));
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
    ]);
  });

  test('it should return default variant if variant is not passed as parameter', () => {
    const { result } = renderHook(() => useVariant(theme, 'button', undefined, 'container'));
    expect(result.current).toStrictEqual([
      'font-manrope',
      'font-medium',
      'rounded-md',
      'bg-green-600',
      'text-button-primary',
      'px-6',
      'py-1',
      'min-w-min',
      'dark:bg-gray-800',
      'dark:text-button-primary',
      'hover:bg-green-700',
      'focus:outline-none',
      'mr-1',
      'active:bg-green-500',
    ]);
  });
});
