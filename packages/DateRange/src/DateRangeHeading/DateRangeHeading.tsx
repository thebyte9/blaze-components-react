// @ts-nocheck
import React, { useEffect, useState } from "react";
import { MONTH_FORMAT, NEXT, PREVIOUS, YEAR_FORMAT } from "../constants";
import { IDateRangeHeadingProps, TMoment } from "../interfaces";
import { Moment } from "../utils";

const DateRangeHeading = ({
  date,
  changeMonthTo,
  resetDate
}: IDateRangeHeadingProps): JSX.Element => {
  const [activeDate, setActiveDate] = useState<TMoment>(date);

  useEffect(() => {
    setActiveDate(date);
  }, [date]);

  const handlePreviousDate = () =>
    changeMonthTo(Moment.previousDate(activeDate));

  const handleNextDate = () => changeMonthTo(Moment.nextDate(activeDate));

  return (
    <nav className="calendar--nav">
      <span onClick={handlePreviousDate}>{PREVIOUS}</span>

      <h1 onClick={resetDate}>
        {Moment.formatDate(activeDate, MONTH_FORMAT)}
        {Moment.formatDate(activeDate, YEAR_FORMAT)}
      </h1>

      <span onClick={handleNextDate}>{NEXT}</span>
    </nav>
  );
};

export default DateRangeHeading;
