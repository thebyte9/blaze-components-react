import expect from "expect";
import removeExtraSpaces from "../../src/removeExtraSpaces";

describe("removeExtraSpace function", () => {
  it("should remove extra spaces at the beginning of the string", () => {
    const sanitizedString = removeExtraSpaces("    word1   word2    word3");
    expect(sanitizedString).toBe("word1 word2 word3");
  });
  it("should remove in between extra spaces", () => {
    const sanitizedString = removeExtraSpaces("word1   word2    word3");
    expect(sanitizedString).toBe("word1 word2 word3");
  });
  it("should remove extra spaces at the end of the string", () => {
    const sanitizedString = removeExtraSpaces("end   ");
    expect(sanitizedString).toBe("end");
  });
  it("should return empty string if string has only white spaces", () => {
    const sanitizedString = removeExtraSpaces("   ");
    expect(sanitizedString).toBe("");
  });
});
