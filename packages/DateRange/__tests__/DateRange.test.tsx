import { render } from "@testing-library/react";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import DateRange from "../src";

const FIRST_DAY_OF_SECONND_ROW = 7;
const LAST_DAY_OF_SECONND_ROW = 13;
const LAST_30_DAYS = 30;

const defaultProps = (override: object = {}) => ({
  onChange: () => void 0,
  selected: "custom",
  ...override
});

describe("DateRange component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const { container } = render(
      <DateRange {...defaultProps({ selected: LAST_30_DAYS })} />
    );

    expect(container).toBeDefined();
  });

  test("should handle next and previous month", () => {
    const wrapper = mount(<DateRange {...defaultProps()} />);
    wrapper
      .find(".calendar-input")
      .at(0)
      .simulate("click");

    const currentDate = wrapper
      .find(".monthAndYear")
      .at(0)
      .text();

    wrapper.find(".nextMonth").simulate("click");
    const nextDate = wrapper.find(".monthAndYear").text();

    expect(currentDate).not.toBe(nextDate);

    wrapper.find(".prevMonth").simulate("click");
    const previousDate = wrapper.find(".monthAndYear").text();

    expect(currentDate).toBe(previousDate);
  });

  test("should select a date range", () => {
    const wrapper = mount(<DateRange {...defaultProps()} />);

    wrapper
      .find(".calendar-input")
      .at(0)
      .simulate("click");

    wrapper
      .find(".day")
      .at(FIRST_DAY_OF_SECONND_ROW)
      .simulate("click");

    expect(
      wrapper
        .find(".day")
        .at(FIRST_DAY_OF_SECONND_ROW)
        .hasClass("pointDate")
    ).toEqual(true);

    wrapper
      .find(".day")
      .at(LAST_DAY_OF_SECONND_ROW)
      .simulate("click");

    expect(
      wrapper
        .find(".day")
        .at(LAST_DAY_OF_SECONND_ROW)
        .hasClass("pointDate")
    ).toEqual(true);

    expect(
      wrapper
        .find(".day")
        .at(FIRST_DAY_OF_SECONND_ROW)
        .hasClass("pointDate")
    ).toEqual(false);
  });
});
