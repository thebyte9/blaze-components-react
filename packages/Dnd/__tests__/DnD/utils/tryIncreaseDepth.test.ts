import expect from "expect";
import { tryIncreaseDepth } from "../../../src/utils/tryIncreaseDepth";
import { tryIncreaseDepthInput, tryIncreaseDepthOutput } from "../../mocks/dnd";

describe("Try increase", () => {
  it("should be defined", () => {
    expect(tryIncreaseDepth).toBeDefined();
  });

  it("should return the expected result", () => {
    const result = tryIncreaseDepth(tryIncreaseDepthInput);
    expect(result).toStrictEqual(tryIncreaseDepthOutput);
  });
});
