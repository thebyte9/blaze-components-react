import { renderHook } from "@testing-library/react-hooks";
import expect from "expect";
import React from "react";
import ToastContext from "../../../src/Toast/ToastContext";
import useToasts from "../../../src/Toast/useToasts";

describe("Use toast", () => {
  it("should be defined", () => {
    expect(useToasts).toBeDefined();
  });

  test("should  receive the context", () => {
    const fakeContextImplementation = {
      add: jest.fn(),
      remove: jest.fn(),
      removeAll: jest.fn(),
      toasts: [],
      update: jest.fn()
    };
    const wrapper = ({ children }: { children: any }) => (
      <ToastContext.Provider value={fakeContextImplementation}>
        {children}
      </ToastContext.Provider>
    );

    const { result } = renderHook(() => useToasts(), {
      wrapper
    });

    Object.keys(result.current).forEach(key => {
      expect(result.current[key]).toBeDefined();
    });
  });
});
