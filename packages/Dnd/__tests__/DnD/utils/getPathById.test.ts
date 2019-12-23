import expect from "expect";
import { getPathById } from "../../../src/utils/getPathById";
import { getPathByIdInput, getPathByIdOutput } from "../../mocks/dnd";

describe("Get item by path id", () => {
  it("should be defined", () => {
    expect(getPathById).toBeDefined();
  });

  it("should return the expected result", () => {
    const result = getPathById(getPathByIdInput);
    expect(result).toStrictEqual(getPathByIdOutput);
  });
});
