import expect from "expect";
import { getRealNextPath } from "../../../src/utils/getRealNextPath";
import {
  getRealNextPathInput,
  getRealNextPathInput2,
  getRealNextPathInput3,
  getRealNextPathOutput,
  getRealNextPathOutput3
} from "../../mocks/dnd";

describe("Get real next path", () => {
  it("should be defined", () => {
    expect(getRealNextPath).toBeDefined();
  });

  it("should return the expected output", () => {
    const result = getRealNextPath(getRealNextPathInput);
    expect(result).toStrictEqual(getRealNextPathOutput);
  });

  it("should return the expected output 2", () => {
    const result = getRealNextPath(getRealNextPathInput2);
    expect(result).toStrictEqual(getRealNextPathOutput);
  });

  it("should return the expected output 3", () => {
    const result = getRealNextPath(getRealNextPathInput3);
    expect(result).toStrictEqual(getRealNextPathOutput3);
  });
});
