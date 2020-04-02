// @ts-nocheck
import Select from "@blaze-react/select";
import cloneDeep from "lodash.clonedeep";
// import moment from "moment/src/moment.js";
import React, { useState } from "react";
import { IDateRangeProps, IOnChangeArguments, TMoment } from "../interfaces";
import DateRangeDays from "./DateRangeDays";
import DateRangeHeading from "./DateRangeHeading";
import { Moment } from "./utils";

const DEFAULT_OPTIONS = [
  [1, "Last 24 hours"],
  [2, "Last 48 hours"],
  [3, "Last 72 hours"],
  [7, "Last 7 days"],
  [30, "Last 30 days"],
  [12, "Last 12 month"],
  ["custom", "Custom range date"],
  ["any", "Any date"]
];

interface IDateRangeProps {
  children?: any;
  onChange: (args: IOnChangeArguments) => void;
}

const DateRange: React.SFC<IDateRangeProps> = ({
  children,
  onChange,
  ...attr
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number>("any");
  const [date, setDate] = useState<TMoment | null>(Moment.currentDate);
  const [startDate, setStartDate] = useState<TMoment | null>(null);
  const [endDate, setEndStartDate] = useState<TMoment | null>(null);

  const resetDate = () => setDate(Moment.currentDate);

  const changeMonth = (month: string) => {
    const newDate = cloneDeep(date);
    newDate.month(month);
    setDate(newDate);
  };

  const changeDate = (newDate: any) => {
    let dateStartCopy = cloneDeep(startDate);
    let dateEndCopy = cloneDeep(endDate);

    if (
      startDate === null ||
      Moment.isTheBeforeDate(
        { date: newDate, dateToEvaluate: startDate, type: "day" },
        "day"
      ) ||
      !Moment.isTheSameDate(
        { date: startDate, dateToEvaluate: endDate, type: "day" },
        "day"
      )
    ) {
      dateStartCopy = Moment.instance(newDate);
      dateEndCopy = Moment.instance(newDate);
    } else if (
      Moment.isTheSameDate(
        { date: newDate, dateToEvaluate: startDate, type: "day" },
        "day"
      ) &&
      Moment.isTheSameDate(
        { date: newDate, dateToEvaluate: endDate, type: "day" },
        "day"
      )
    ) {
      dateStartCopy = null;
      dateEndCopy = null;
    } else if (
      Moment.isTheAfterDate(
        { date: newDate, dateToEvaluate: startDate, type: "day" },
        "day"
      )
    ) {
      dateEndCopy = Moment.instance(newDate);
    }

    setStartDate(dateStartCopy);
    setEndStartDate(dateEndCopy);

    onChange({
      end: Moment.formatDate(dateEndCopy),
      start: Moment.formatDate(dateStartCopy)
    });
  };

  const isCustom = selectedOption === "custom";

  const handleOnChange = ({ value } = {}) => {
    setSelectedOption(value);

    if (Moment.isNumber(value)) {
      const isMonth = Number(value) === 12;
      const type = isMonth ? "month" : "day";

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
            changeMonth={(month: any) => changeMonth(month)}
            resetDate={resetDate}
          />

          <DateRangeDays
            onClick={(d: any) => changeDate(d)}
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
  onChange: () => void 0
};
export default DateRange;
