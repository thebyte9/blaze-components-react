import { cleanup, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import Nestable from "../../../src/index";
import { fakeItem } from "../../mocks/dnd";

describe("Nestable", () => {
  afterEach(cleanup);
  it("should be defined", () => {
    expect(Nestable).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <Nestable
        onChange={jest.fn()}
        childrenWrapperClassName="list__item list__item--pagebuilder"
        items={[fakeItem]}
        childrenProp="items"
        renderItem={({ item, children, DragHandler }) => (
          <div className="list__item list__item--pagebuilder">
            <p>{item.name}</p>
            <p>{item.id}</p>
            <DragHandler />
            {children}
          </div>
        )}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
