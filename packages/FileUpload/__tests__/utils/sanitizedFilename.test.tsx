import expect from 'expect';
import sanitizedFilename from '../../src/utils/sanitized-filename';

describe('sanitizedFilename function', () => {
  it('should be defined', () => {
    expect(sanitizedFilename).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof sanitizedFilename).toEqual('function');
  });

  it('should return expected value', () => {
    const file = { name: 'test-image.jpg' };
    const expectedValue = 'test-imagejpg';
    expect(sanitizedFilename(file)).toStrictEqual(expectedValue);
  });
});
