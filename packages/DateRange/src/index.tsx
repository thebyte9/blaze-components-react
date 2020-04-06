// @ts-nocheck
import Select from "@blaze-react/select";
import cloneDeep from "lodash.clonedeep";
import React, { useState } from "react";
import { IDateRangeProps, TMoment } from "../interfaces";
import { DAY, DEFAULT_OPTIONS, MONTH } from "./constants";
import DateRangeDays from "./DateRangeDays";
import DateRangeHeading from "./DateRangeHeading";
import { Moment } from "./utils";

const DateRange: React.SFC<IDateRangeProps> = ({
  children,
  onChange,
  selected,
  ...attr
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number>(
    selected
  );
  const [date, setDate] = useState<TMoment | null>(Moment.currentDate);
  const [startDate, setStartDate] = useState<TMoment | null>(null);
  const [endDate, setEndStartDate] = useState<TMoment | null>(null);

  const resetDate = () => setDate(Moment.currentDate);

  const evaluate = (newDate: TMoment) => {
    if (
      startDate === null ||
      Moment.isTheBeforeDate({
        date: newDate,
        dateToEvaluate: startDate
      }) ||
      !Moment.isTheSameDate({
        date: startDate,
        dateToEvaluate: endDate
      })
    ) {
      return {
        end: Moment.instance(newDate),
        start: Moment.instance(newDate)
      };
    }

    if (Moment.isTodaysDate({ date: newDate, endDate, startDate })) {
      return {
        end: null,
        start: null
      };
    }

    if (
      Moment.isTheAfterDate({
        date: newDate,
        dateToEvaluate: startDate
      })
    ) {
      return {
        end: Moment.instance(newDate),
        start: cloneDeep(startDate)
      };
    }
  };

  const changeDate = (newDate: any) => {
    const { start, end } = evaluate(newDate);

    setStartDate(start);
    setEndStartDate(end);

    onChange({
      end: Moment.formatDate(end),
      start: Moment.formatDate(start)
    });
  };

  const changeMonthTo = (month: string) => {
    const newDate = cloneDeep(date);
    newDate.month(month);
    setDate(newDate);
  };

  const isCustom = selectedOption === "custom";

  const handleOnChange = ({ value } = {}) => {
    setSelectedOption(value);

    if (Moment.isNumber(value)) {
      const isMonth = Number(value) === 12;
      const type = isMonth ? MONTH : DAY;

      const selectedDate = Moment.subtract({ value, type });
      onChange({ selectedDate: Moment.formatDate(selectedDate) });
    }
  };
  return (
    <>
      <Select
        label="Date Range"
        selected={selectedOption}
        options={DEFAULT_OPTIONS}
        onChange={handleOnChange}
      />
      {isCustom && (
        <div className="calendar">
          <DateRangeHeading
            date={date}
            changeMonthTo={(month: TMoment) => changeMonthTo(month)}
            resetDate={resetDate}
          />

          <DateRangeDays
            onClick={(d: TMoment) => changeDate(d)}
            date={date}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      )}
    </>
  );
};

DateRange.defaultProps = {
  children: "No content",
  onChange: () => void 0,
  selected: "any"
};
export default DateRange;
