import expect from "expect";
import { listWithChildren } from "../../../src/utils/listWithChildren";
import { listWithChildrenInput, listWithChildrenOutput } from "../../mocks/dnd";

describe("List with children", () => {
  it("should be defined", () => {
    expect(listWithChildren).toBeDefined();
  });

  it("should return expected output", () => {
    const result = listWithChildren(listWithChildrenInput, "items");
    expect(result).toStrictEqual(listWithChildrenOutput);
  });
});
