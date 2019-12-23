import expect from "expect";
import { tryDecreaseDepth } from "../../../src/utils/tryDecreaseDepth";
import { tryDecreaseDepthInput, tryDecreaseDepthOutput } from "../../mocks/dnd";

describe("Try decrease", () => {
  it("should be defined", () => {
    expect(tryDecreaseDepth).toBeDefined();
  });

  it("should return the expected output", () => {
    const result = tryDecreaseDepth(tryDecreaseDepthInput);
    expect(result).toStrictEqual(tryDecreaseDepthOutput);
  });
});
