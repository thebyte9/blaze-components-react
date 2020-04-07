// @ts-nocheck
import Input from "@blaze-react/input";
import withUtils from "@blaze-react/utils";
import React, { useState } from "react";
import { MONTHS, NEXT, PREVIOUS, SEPARATOR } from "../constants";
import { IDateRangeProps } from "../interfaces";

import { DateUtils } from "../utils";

const DateRange: React.SFC<IDateRangeProps> = ({
  onChange,
  utils: { classNames }
}) => {
  const [year, setYear] = useState<string | number>(new Date().getFullYear());
  const [month, setMonth] = useState<string | number>(new Date().getMonth());
  const [date, setDate] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [calendarStatus, setCalendarStatus] = useState<boolean>(false);

  const changeValue = (DD: string, MM: string, YY: string) => {
    const pickedDate = DateUtils.formatDate(DD, MM, YY);

    setSelectedDate(pickedDate);
    onChange({ pickedDate });
  };

  const changeDate = (event: any) => {
    const { target: { dataset: { currentdate } = {} } = {} } = event;
    const [newDate, newMonth, newYear] = currentdate.split(SEPARATOR);

    const { DD, MM, YY } = DateUtils.dateToNumber(newDate, newMonth, newYear);
    changeValue(DD, MM + 1, YY);

    setYear(YY);
    setMonth(MM);
    setDate(DateUtils.formatDate(DD, MM, YY));
  };

  const handlePreviousMonth = () => {
    const { prevYear, prevMonth } = DateUtils.getPrevMonth(month, year);

    setYear(prevYear);
    setMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const { nextYear, nextMonth } = DateUtils.getNextMonth(month, year);

    setYear(nextYear);
    setMonth(nextMonth);
  };

  const getDayClassName = (dateToCheck: any): string => {
    const pickedDate = DateUtils.formatDate(
      dateToCheck.getDate(),
      dateToCheck.getMonth(),
      dateToCheck.getFullYear()
    );

    return classNames({
      outDate: dateToCheck.getMonth() !== month,
      pointDate: pickedDate === date,
      today: DateUtils.isToday(dateToCheck) && pickedDate !== date
    });
  };

  const resetDate = () => {
    const newYear = DateUtils.currentDate.getFullYear();
    const newMonth = DateUtils.currentDate.getMonth();
    const newDate = DateUtils.currentDate.getDate();

    changeValue(newDate, newMonth + 1, newYear);

    setYear(newYear);
    setMonth(newMonth);
    setDate(newDate);
  };

  const handleOnFocus = () => setCalendarStatus(true);

  const getInputValue = () => {
    const [DD, MM, YY] = selectedDate.split(SEPARATOR);
    if (!DD || !MM || !YY) {
      return;
    }
    return `${YY}-${MM.padStart(2, "0")}-${DD.padStart(2, "0")}`;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-input">
        <span>From</span>
        <Input
          onChange={() => ""}
          placeholder="dd/mm/yy"
          value={getInputValue}
          onFocus={handleOnFocus}
          className="range-date"
          type="date"
        />
      </div>
      {calendarStatus && (
        <div className="calendar">
          <div className="header">
            <span className="prevMonth" onClick={handlePreviousMonth}>
              {PREVIOUS}
            </span>
            <div className="monthAndYear">
              <span onClick={resetDate}>
                {MONTHS[month]} {year}
              </span>
            </div>
            <span className="nextMonth" onClick={handleNextMonth}>
              {NEXT}
            </span>
          </div>
          <div className="calendar__content">
            <ul className="calendar__content__list">
              {DateUtils.getNameOfDays()}
            </ul>
            <ul className="calendar__content__days">
              {DateUtils.getListOfDays(year, month).map(
                ({
                  currentYearToString,
                  currentMonthToString,
                  currentDateToString,
                  currentDate
                }) => (
                  <li
                    className={`calendar__content__days__item ${getDayClassName(
                      currentDate
                    )}`}
                    data-currentdate={DateUtils.formatDate(
                      currentDateToString,
                      currentMonthToString,
                      currentYearToString
                    )}
                    onClick={changeDate}
                  >
                    {currentDate.getDate()}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

DateRange.defaultProps = {
  onChange: () => void 0
};
export default withUtils(DateRange);
