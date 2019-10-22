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
        onSort={jest.fn()}
        orderBy={data.orderBy}
        column={data.columns[0]}
        columns={data.columns}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render without throwing error", () => {
    const onSortMock = jest.fn();

    const { getByTestId } = render(
      <SortableCell
        onSort={onSortMock}
        orderBy={data.orderBy}
        column={data.columns[1]}
        columns={data.columns}
      />
    );

    const sort = getByTestId(`sortby-${data.columns[1]}`);

    fireEvent.click(sort);

    expect(onSortMock).toHaveBeenCalledWith({ [data.columns[1]]: "asc" });
  });
});
