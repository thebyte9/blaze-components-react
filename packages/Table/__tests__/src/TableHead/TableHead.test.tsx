import { cleanup, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import TableHead from "../../../src/TableHead/index";
import { data } from "../../mocks";

jest.mock("../../../src/TableHead/SortableCell/SortableCell.tsx", () =>
  jest.fn(() => <div>Sortable.cell</div>)
);

describe("Table head", () => {
  afterEach(cleanup);

  it("should be defined", () => {
    expect(TableHead).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <TableHead
        headRef={{ current: true }}
        onSort={jest.fn()}
        orderBy={data.orderBy}
        columns={data.columns}
        labels={data.labels}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
