import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import {
  AlertIcon,
  CheckIcon,
  CloseIcon,
  FlameIcon,
  InfoIcon
} from "../../src/Icons";

describe("Icons", () => {
  it("should be defined", () => {
    [AlertIcon, CheckIcon, CloseIcon, FlameIcon, InfoIcon].forEach(Icon => {
      expect(Icon).toBeDefined();
    });
  });

  it("should render whitout throwing an error", () => {
    [AlertIcon, CheckIcon, CloseIcon, FlameIcon, InfoIcon].forEach(Icon => {
      const { container } = render(<Icon />);
      expect(container).toMatchSnapshot();
    });
  });
});
