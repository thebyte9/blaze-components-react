// @ts-nocheck
import Input from "@blaze-react/input";
import withUtils from "@blaze-react/utils";
import React, { useEffect, useRef, useState } from "react";
import { MONTHS, NEXT, PREVIOUS, SEPARATOR } from "../constants";
import { IDateRangeProps } from "../interfaces";

import { DateUtils } from "../utils";

const DateRange: React.SFC<IDateRangeProps> = ({
  onChange,
  type,
  utils: { classNames }
}) => {
  const [year, setYear] = useState<string | number>(new Date().getFullYear());
  const [month, setMonth] = useState<string | number>(new Date().getMonth());
  const [date, setDate] = useState<string | null>(new Date().getDate());
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [calendarStatus, setCalendarStatus] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  const changeValue = (DD: string, MM: string, YY: string) => {
    const pickedDate = DateUtils.formatDate(DD, MM, YY);

    setSelectedDate(pickedDate);
    onChange({ [type.toLowerCase()]: pickedDate });
  };

  const handleCloseCalendar = (event: any) => {
    if (wrapperRef) {
      const { current } = wrapperRef;
      if (current && !current.contains(event.target)) {
        setCalendarStatus(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseCalendar);
    return () => {
      document.removeEventListener("mousedown", handleCloseCalendar);
    };
  }, [wrapperRef]);

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

  const handleInputChange = ({ value }) => {
    const [newDate, newMonth, newYear] = value.split(SEPARATOR);

    if (DateUtils.isInvalidDate(newDate, newMonth, newYear)) {
      return;
    }

    const { DD, MM, YY } = DateUtils.dateToNumber(newDate, newMonth, newYear);

    changeValue(DD, MM, YY);
    setYear(YY);
    setMonth(MM - 1);
    setDate(DateUtils.formatDate(DD, MM - 1, YY));
  };

  const handleOnClick = () => setCalendarStatus(true);

  return (
    <div className="calendar-container" ref={wrapperRef}>
      <div className="calendar-input" onClick={handleOnClick}>
        <span>{type}</span>
        <Input
          placeholder="dd/mm/yy"
          value={selectedDate}
          className="range-date"
          onChange={handleInputChange}
        />
      </div>
      {calendarStatus && (
        <div className="calendar" for={type}>
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
                    className={`calendar__content__days__item day ${getDayClassName(
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
  onChange: () => void 0,
  type: "selectedDate"
};
export default withUtils(DateRange);
