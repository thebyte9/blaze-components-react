// @ts-nocheck
import React from "react";
import { DAY, MONTH } from "../constants";
import { IDateRangeDayProps } from "../interfaces";
import { Moment } from "../utils";

const DateRangeDay = ({
  currentDate,
  date,
  startDate,
  endDate,
  onClick
}: IDateRangeDayProps): JSX.Element => {
  const className = [];

  if (Moment.isToday(date, DAY)) {
    className.push("active");
  }

  if (date.isSame(startDate, DAY)) {
    className.push("start");
  }

  if (date.isBetween(startDate, endDate, DAY)) {
    className.push("between");
  }

  if (date.isSame(endDate, DAY)) {
    className.push("end");
  }

  if (!date.isSame(currentDate, MONTH)) {
    className.push("muted");
  }

  return (
    <span
      onClick={() => onClick(date)}
      currentDate={date}
      className={className.join(" ")}
    >
      {date.date()}
    </span>
  );
};

export default DateRangeDay;
