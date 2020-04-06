// @ts-nocheck
import React from "react";
import { MONTH, WEEKDAYS } from "../constants";
import DateRangeDay from "../DateRangeDay";
import { IDateRangeDaysProps, TMoment } from "../interfaces";
import { Moment } from "../utils";

const DateRangeDays = ({
  date,
  startDate,
  endDate,
  onClick
}: IDateRangeDaysProps): JSX.Element => {
  const thisDate = Moment.instance(date);
  const daysInMonth = Moment.instance(date).daysInMonth();
  const firstDayDate = Moment.instance(date).startOf(MONTH);
  const previousMonth = Moment.instance(date).subtract(1, MONTH);
  const previousMonthDays = previousMonth.daysInMonth();
  const nextsMonth = Moment.instance(date).add(1, MONTH);

  const handleDateClick = (selectedDate: TMoment) => onClick(selectedDate);

  const PreviousMonthDayWrapper = (prevMonth: TMoment) => (
    <DateRangeDay
      key={Moment.formatDate(prevMonth)}
      onClick={handleDateClick}
      currentDate={date}
      date={Moment.instance(prevMonth)}
      startDate={startDate}
      endDate={endDate}
    />
  );

  const DayInMonthWrapper = (respectiveDay: TMoment) => (
    <DateRangeDay
      key={Moment.formatDate(respectiveDay)}
      onClick={handleDateClick}
      currentDate={date}
      date={Moment.instance(respectiveDay)}
      startDate={startDate}
      endDate={endDate}
    />
  );

  const NextMonthDayWrapper = (followingMonth: TMoment) => (
    <DateRangeDay
      key={Moment.formatDate(followingMonth)}
      onClick={handleDateClick}
      currentDate={date}
      date={Moment.instance(followingMonth)}
      startDate={startDate}
      endDate={endDate}
    />
  );

  let calendar = Moment.getPreviousMonthDays({
    PreviousMonthDayWrapper,
    firstDayDate,
    previousMonth,
    previousMonthDays
  });

  calendar = Moment.getNextMonthDays({
    NextMonthDayWrapper,
    calendar: Moment.getDaysInMonth({
      DayInMonthWrapper,
      calendar,
      daysInMonth,
      thisDate
    }),
    nextsMonth
  });

  const weekdays = [...Array(WEEKDAYS)].map((day, index) => {
    const dayName = Moment.getDayName(index + 1);
    return (
      <span className="label" key={`${day}-${dayName}`}>
        {dayName}
      </span>
    );
  });

  return (
    <nav className="calendar--days">
      {weekdays}
      {calendar}
    </nav>
  );
};

export default DateRangeDays;
