import { cleanup, fireEvent, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import TableBody from "../../../src/TableBody/TableBody";
import { data } from "../../mocks";

describe("Table body", () => {
  afterEach(cleanup);

  it("should be defined", () => {
    expect(TableBody).toBeDefined();
  });

  it("should show placeholder if there is no data yet", () => {
    const placeholder = "The table is empty of records";

    const { getByText } = render(
      <TableBody
        allRows={[]}
        bodyRef={{ current: false }}
        placeholder={placeholder}
      />
    );

    getByText(placeholder);
  });

  it("should render data and pass it throught virtual list", () => {
    const { container } = render(
      <TableBody
        selected={[]}
        onItemsRendered={jest.fn}
        checkboxes={true}
        columns={data.columns}
        allRows={data.rows}
        bodyRef={{ current: { offsetHeight: 1000 } }}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should retun row on be clicked", () => {
    const mockedOnClickRow = jest.fn();
    const { getByTestId } = render(
      <TableBody
        handleSelected={jest.fn()}
        onClickRow={mockedOnClickRow}
        selected={[]}
        onItemsRendered={jest.fn}
        checkboxes={true}
        columns={data.columns}
        allRows={data.rows}
        bodyRef={{ current: { offsetHeight: 1000 } }}
      />
    );

    const row = getByTestId("row-checkbox-2");
    fireEvent.click(row);

    expect(mockedOnClickRow).toHaveBeenCalledWith({
      ...data.rows[1],
      index: 1
    });
  });
});
