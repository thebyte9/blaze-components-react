import expect from "expect";
import uniqueId from "../../src/uniqueId";

declare let window: any;

describe("uniqueId function", () => {
  it("should be defined", () => {
    expect(uniqueId).toBeDefined();
  });
  it("should be a function", () => {
    expect(typeof uniqueId).toBe("function");
  });

  it("should return a string when input is string", () => {
    const uniqueString = uniqueId("test");
    expect(typeof uniqueString).toBe("string");
    expect(uniqueString.includes("uid-")).toBeTruthy();
  });

  it("should return a string when input is object", () => {
    const uniqueString = uniqueId({ key: "key1" });
    expect(typeof uniqueString).toBe("string");
    expect(uniqueString.includes("uid-")).toBeTruthy();
  });

  it("should return a string with key length when function's argument is an object", () => {
    const uniqueString1 = uniqueId("test1");
    const uniqueString2 = uniqueId("test1");
    expect(uniqueString2).toEqual(`${uniqueString1}_3`);
  });

  it("should work on server side rendering", () => {
    window.btoa = undefined;
    const uniqueString3 = uniqueId("test2");
    expect(uniqueString3.includes("uid-")).toBeTruthy();
  });
});
