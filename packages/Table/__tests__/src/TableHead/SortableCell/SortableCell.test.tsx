import { cleanup, fireEvent, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import SortableCell from "../../../../src/TableHead/SortableCell/SortableCell";
import { data } from "../../../mocks";

describe("Sortable cell", () => {
  afterEach(cleanup);

  it("should be defined", () => {
    expect(SortableCell).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <SortableCell
        appliedSort={null}
        onSort={jest.fn()}
        orderBy={data.orderBy}
        column={data.columns[0]}
        columns={data.columns}
        labels={data.labels}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render without throwing error", () => {
    const onSortMock = jest.fn();

    const { getByTestId } = render(
      <SortableCell
        appliedSort={{ name: "asc" }}
        onSort={onSortMock}
        orderBy={data.orderBy}
        column={data.columns[1]}
        columns={data.columns}
        labels={data.labels}
      />
    );

    const sort = getByTestId(`sortby-${data.columns[1]}`);

    fireEvent.click(sort);

    expect(onSortMock).toHaveBeenCalledWith({ [data.columns[1]]: "desc" });
  });
});
