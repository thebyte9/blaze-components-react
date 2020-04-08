import expect from "expect";
import { getInputLabel } from "../../src/utils";

describe("getInputLabel function", () => {
  it("should be defined", () => {
    expect(getInputLabel).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof getInputLabel).toEqual('function');
  });

  it("should return expected value (type image)", () => {
    const expectedValue = 'image title'
    expect(getInputLabel('title', 'image')).toStrictEqual(expectedValue);
  });

  it("should return expected value (type doc)", () => {
    const expectedValue = 'document title'
    expect(getInputLabel('title', 'doc')).toStrictEqual(expectedValue);
  });

  it("should return expected value (type video)", () => {
    const expectedValue = 'video title'
    expect(getInputLabel('title', 'video')).toStrictEqual(expectedValue);
  });
});
