import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import React from "react";
import Table from "../../src";
import { data } from "../mocks";

jest.mock("../../src/TableBody", () => jest.fn(() => <div>Table.body</div>));
jest.mock("../../src/TableHead", () => jest.fn(() => <div>Table.head</div>));

describe("Table component", () => {
  it("should be defined and renders correctly (snapshot)", () => {
    const { container } = render(<Table checkboxes={false} data={data} />);

    expect(container).toMatchSnapshot();
  });
});
