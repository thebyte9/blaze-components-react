import { withOpacity } from '../src/utils/withOpacity';

describe('withOpacity function', () => {
  test('it should return an rgba value', () => {
    const opacityFn = withOpacity('--tab-color-text-base');
    const result = opacityFn({ opacityValue: 1 });
    expect(result).toBe('rgba(var(--tab-color-text-base), 1)');
  });

  test('it should return an rgb value if opacityValue is not set', () => {
    const opacityFn = withOpacity('--tab-color-text-base');
    const result = opacityFn({ opacityValue: undefined });
    expect(result).toBe('rgba(var(--tab-color-text-base))');
  });
});
