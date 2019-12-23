import expect from "expect";
import { getSplicePath } from "../../../src/utils/getSplicePath";
import { getSplicePathInput, getSplicePathOutput } from "../../mocks/dnd";

describe("Get splice path", () => {
  it("should be defined", () => {
    expect(getSplicePath).toBeDefined();
  });

  it("should return the expected output", () => {
    const { path, options } = getSplicePathInput;
    const result = getSplicePath(path, options);
    expect(result).toStrictEqual(getSplicePathOutput);
  });
});
