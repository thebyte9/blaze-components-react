import expect from "expect";
import { getTransformProps } from "../../../src/utils/getTransformProps";

describe("Get transform props", () => {
  it("should be defined", () => {
    expect(getTransformProps).toBeDefined();
  });
});
