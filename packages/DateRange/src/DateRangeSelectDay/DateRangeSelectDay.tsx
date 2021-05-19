import Input from '../../../Input/src/Input';
import buildClassNames from '../../../Utils/src/buildClassNames';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { MONTHS, NEXT, PREVIOUS, SEPARATOR } from '../constants';
import { DateUtilsSingleton } from '../utils';

export interface IDateRangeProps {
  children?: any;
  onChange: (args: IOnChangeArguments) => void;
  selected?: any;
  type?: string;
}

// interface ISubtract {
//   value: number | string;
//   type: string;
// }

interface IOnChangeArguments {
  end?: string;
  start?: string;
  selectedDate?: string;
}

const DateRangeSelectDay: React.SFC<IDateRangeProps> = ({ onChange, type = '' }) => {
  const [year, setYear] = useState<string | number>(new Date().getFullYear());
  const [month, setMonth] = useState<string | number>(new Date().getMonth());
  const [date, setDate] = useState<string | number>(new Date().getDate());
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [calendarStatus, setCalendarStatus] = useState<boolean>(false);
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const changeValue = (DD: string | number, MM: string | number, YY: string | number) => {
    const pickedDate = DateUtilsSingleton.formatDate(DD, MM, YY);

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
    document.addEventListener('mousedown', handleCloseCalendar);
    return () => {
      document.removeEventListener('mousedown', handleCloseCalendar);
    };
  }, [wrapperRef]);

  const changeDate = (event: any) => {
    const {
      target: {
        dataset: { currentdate },
      },
    } = event;
    const [newDate, newMonth, newYear] = currentdate.split(SEPARATOR);

    const { DD, MM, YY } = DateUtilsSingleton.dateToNumber(newDate, newMonth, newYear);
    changeValue(DD, MM + 1, YY);

    setYear(YY);
    setMonth(MM);
    setDate(DateUtilsSingleton.formatDate(DD, MM, YY));
  };

  const handlePreviousMonth = () => {
    const { prevYear, prevMonth } = DateUtilsSingleton.getPrevMonth(Number(month), Number(year));

    setYear(prevYear);
    setMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const { nextYear, nextMonth } = DateUtilsSingleton.getNextMonth(Number(month), Number(year));

    setYear(nextYear);
    setMonth(nextMonth);
  };

  const getDayClassName = (dateToCheck: any): string => {
    const pickedDate = DateUtilsSingleton.formatDate(
      dateToCheck.getDate(),
      dateToCheck.getMonth(),
      dateToCheck.getFullYear(),
    );

    return buildClassNames({
      active: pickedDate === date,
      current: DateUtilsSingleton.isToday(dateToCheck) && pickedDate !== date,
      disabled: dateToCheck.getMonth() !== month,
    });
  };

  const resetDate = () => {
    const newYear = DateUtilsSingleton.date().getFullYear();
    const newMonth = DateUtilsSingleton.date().getMonth();
    const newDate = DateUtilsSingleton.date().getDate();

    changeValue(newDate, newMonth + 1, newYear);

    setYear(newYear);
    setMonth(newMonth);
    setDate(newDate);
  };

  const handleInputChange = ({ value }: any) => {
    const [newDate, newMonth, newYear] = value.split(SEPARATOR);

    if (DateUtilsSingleton.isInvalidDate(newDate, newMonth, newYear)) {
      return;
    }

    const { DD, MM, YY } = DateUtilsSingleton.dateToNumber(newDate, newMonth, newYear);

    changeValue(DD, MM, YY);
    setYear(YY);
    setMonth(MM - 1);
    setDate(DateUtilsSingleton.formatDate(DD, MM - 1, YY));
  };

  const handleOnClick = () => setCalendarStatus(true);

  return (
    <div className="calendar-container" ref={wrapperRef}>
      <div className="calendar-input" onClick={handleOnClick}>
        <span className="calendar-input__label">{type}</span>
        <Input placeholder="dd/mm/yy" value={selectedDate} className="range-date" onChange={handleInputChange} />
      </div>
      {calendarStatus && (
        <div className="calendar">
          <div className="calendar__header">
            <span className="calendar__header__prev" onClick={handlePreviousMonth}>
              {PREVIOUS}
            </span>
            <div className="calendar__header__year">
              <span onClick={resetDate}>
                {MONTHS[Number(month)]} {year}
              </span>
            </div>
            <span className="calendar__header__next" onClick={handleNextMonth}>
              {NEXT}
            </span>
          </div>
          <div className="calendar__content">
            <ul className="calendar__content__list">{DateUtilsSingleton.getNameOfDays()}</ul>
            <ul className="calendar__content__days">
              {DateUtilsSingleton.getListOfDays(Number(year), Number(month)).map(
                ({ currentYearToString, currentMonthToString, currentDateToString, currentDate }) => (
                  <li
                    key={`${currentMonthToString}-${currentDateToString}`}
                    className={`calendar__content__days__item day ${getDayClassName(currentDate)}`}
                    data-currentdate={DateUtilsSingleton.formatDate(
                      currentDateToString,
                      currentMonthToString,
                      currentYearToString,
                    )}
                    onClick={changeDate}
                  >
                    {currentDate.getDate()}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeSelectDay;
