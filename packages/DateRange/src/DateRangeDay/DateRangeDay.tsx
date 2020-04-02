// @ts-nocheck

import moment from "moment/src/moment.js";
import React from "react";

interface IDateRangeDayProps {
  date: any;
  currentDate: any;
  onClick: (event: any) => void;
  startDate: any;
  endDate: any;
}

const DateRangeDay = ({
  currentDate,
  date,
  startDate,
  endDate,
  onClick
}: IDateRangeDayProps): JSX.Element => {
  const className = [];

  if (moment().isSame(date, "day")) {
    className.push("active");
  }

  if (date.isSame(startDate, "day")) {
    className.push("start");
  }

  if (date.isBetween(startDate, endDate, "day")) {
    className.push("between");
  }

  if (date.isSame(endDate, "day")) {
    className.push("end");
  }

  if (!date.isSame(currentDate, "month")) {
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
