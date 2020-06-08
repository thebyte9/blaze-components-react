import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import parseTextBlock from "../src/text-block-parser";

describe("DraftEditor component", () => {
  test("should be defined and parse text block value", () => {
    const TextBlockPreview = ({
      children,
    }: {
      children: JSX.Element | JSX.Element[];
    }) => <>{children}</>;

    const testValueJSON =
      '{"blocks":[{"key":"ai4n8","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4a0pe","text":"testing","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7mq4b","text":"HORIZONTAL_RULE","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":15,"key":0}],"data":{}},{"key":"5mqhr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3dbt7","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"HORIZONTAL_RULE","mutability":"IMMUTABLE","data":{}}}}';

    const textBlockContent = mount(
      <TextBlockPreview>{parseTextBlock(testValueJSON)}</TextBlockPreview>
    );

    expect(textBlockContent).toBeDefined();
    expect(textBlockContent.find("h1").text()).toContain("testing");
    expect(textBlockContent.find("hr").length).toBe(1);
  });
});
