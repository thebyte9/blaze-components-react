// @ts-nocheck
import withUtils from "@blaze-react/utils";
import React from "react";
import { DAY, MONTH } from "../constants";
import { IDateRangeDayProps } from "../interfaces";
import { Moment } from "../utils";

const DateRangeDay = ({
  currentDate,
  date,
  startDate,
  endDate,
  onClick,
  utils: { classNames }
}: IDateRangeDayProps): JSX.Element => {
  const handleOnClick = () => onClick(date);

  const dayClassName: string = classNames({
    active: Moment.isToday(date, DAY),
    between: date.isBetween(startDate, endDate, DAY),
    end: date.isSame(endDate, DAY),
    muted: !date.isSame(currentDate, MONTH),
    start: date.isSame(startDate, DAY)
  });

  return (
    <span
      onClick={handleOnClick}
      currentDate={date}
      className={`day ${dayClassName}`}
    >
      {date.date()}
    </span>
  );
};

export default withUtils(DateRangeDay);
