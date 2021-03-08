import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import DraftEditor from "../src";

declare let window: any;

describe("DraftEditor component", () => {
  window.getSelection = () => {
    return {
      removeAllRanges: () => ({}),
    };
  };

  test.skip("should be defined and renders correctly (snapshot)", () => {

    const testValueJSON =
      '{"blocks":[{"key":"ai4n8","text":"testing","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}';

    const {container} = render(<DraftEditor value={testValueJSON} />);
    expect(container).toBeDefined();
  });
});
