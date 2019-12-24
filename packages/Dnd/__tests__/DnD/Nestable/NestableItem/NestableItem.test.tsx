import { cleanup, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import NestableItem from "../../../../src/NestableItem";
import { fakeItem } from "../../../mocks/dnd";

describe("Nestable Item", () => {
  afterEach(cleanup);
  it("should be defined", () => {
    expect(NestableItem).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <NestableItem
        item={fakeItem}
        isCopy={false}
        index={0}
        onMouseEnter={jest.fn()}
        onDragStart={jest.fn()}
        dragItem={null}
        renderItem={() => <div>children Item</div>}
        childrenProp="items"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
