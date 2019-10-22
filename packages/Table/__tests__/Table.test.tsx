import { fireEvent, render } from "@testing-library/react";
import "jest-dom/extend-expect";
import React from "react";
import Table from "../src";

const data = {
  identification: "id",
  columns: ["id", "name", "age"],
  orderBy: ["name", "age"],
  rows: [
    {
      id: 1,
      name: "Lorem",
      age: 52
    },
    {
      id: 2,
      name: "Ipsum",
      age: 43
    }
  ]
};

const withEmptyRows = {
  columns: [],
  orderBy: [],
  rows: []
};

const defaultProps = (override: object = {}) => ({
  checkboxes: false,
  data,
  ...override
});

describe("Table component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const { container } = render(<Table {...defaultProps()} />);

    expect(container).toMatchSnapshot();
  });

  test("should toggle multiselect and one by one", () => {
    let selectedRows: [] = [];

    const onSelect = (selected: []) => {
      selectedRows = selected;
    };

    const override = {
      checkboxes: true,
      onSelect
    };

    const { getByTestId } = render(<Table {...defaultProps(override)} />);

    fireEvent.click(getByTestId("row-checkbox-1"));
    expect(selectedRows).toEqual([1]);

    fireEvent.click(getByTestId("row-checkbox-1"));
    expect(selectedRows).toEqual([]);
  });

  test("should show placeholder if there is no data yet", () => {
    const placeholder = "The table is empty of records";

    let override = {
      data: withEmptyRows,
      placeholder
    };

    const { getByText, rerender } = render(
      <Table {...defaultProps(override)} />
    );

    getByText(placeholder);

    override = {
      ...override,
      ...{
        checkboxes: true
      }
    };

    rerender(<Table {...defaultProps(override)} />);
  });
});
