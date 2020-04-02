// @ts-nocheck
import moment from "moment/src/moment.js";
import React from "react";
import DateRangeDay from "../DateRangeDay";

interface IDateRangeDaysProps {
  date: any;
  onClick: (event: any) => void;
  startDate: any;
  endDate: any;
}

const DateRangeDays = ({
  date,
  startDate,
  endDate,
  onClick
}: IDateRangeDaysProps): JSX.Element => {
  const thisDate = moment(date);
  const daysInMonth = moment(date).daysInMonth();
  const firstDayDate = moment(date).startOf("month");
  const previousMonth = moment(date).subtract(1, "month");
  const previousMonthDays = previousMonth.daysInMonth();
  const nextsMonth = moment(date).add(1, "month");
  const days = [];
  const labels = [];

  for (let i = 1; i <= 7; i++) {
    labels.push(
      <span className="label">
        {moment()
          .day(i)
          .format("ddd")}
      </span>
    );
  }

  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <DateRangeDay
        key={moment(previousMonth).format("DD MM YYYY")}
        onClick={d => onClick(d)}
        currentDate={date}
        date={moment(previousMonth)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i);

    days.push(
      <DateRangeDay
        key={moment(thisDate).format("DD MM YYYY")}
        onClick={(d: any) => onClick(d)}
        currentDate={date}
        date={moment(thisDate)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  const daysCount = days.length;
  for (let i = 1; i <= 42 - daysCount; i++) {
    nextsMonth.date(i);
    days.push(
      <DateRangeDay
        key={moment(nextsMonth).format("DD MM YYYY")}
        onClick={(d: any) => onClick(d)}
        currentDate={date}
        date={moment(nextsMonth)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  return (
    <nav className="calendar--days">
      {labels.concat()}
      {days.concat()}
    </nav>
  );
};

export default DateRangeDays;
