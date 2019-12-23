import expect from "expect";
import { getItemByPath } from "../../../src/utils/getItemByPath";
import { getItemByPathInput, getItemByPathOutput } from "../../mocks/dnd";

describe("Get item by path", () => {
  it("should be defined", () => {
    expect(getItemByPath).toBeDefined();
  });

  it("should return expect output", () => {
    const result = getItemByPath(getItemByPathInput);
    expect(result).toStrictEqual(getItemByPathOutput);
  });
});
