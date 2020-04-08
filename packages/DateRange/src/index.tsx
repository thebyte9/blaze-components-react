// @ts-nocheck
import Select from "@blaze-react/select";
import React, { useState } from "react";
import { IDateRangeProps } from "../interfaces";
import { DEFAULT_OPTIONS } from "./constants";
import DateRangeSelectDay from "./DateRangeSelectDay";

const DateRange: React.SFC<IDateRangeProps> = ({ onChange, selected }) => {
  const [selectedOption, setSelectedOption] = useState<string | number>(
    selected
  );
  const [selectedDate, setSelectedDate] = useState<object>({});

  const handleOnChange = ({ value } = {}) => setSelectedOption(value);
  const handleSelectedDate = (date: any) => {
    const rangeDate = {
      ...selectedDate,
      ...date
    };
    setSelectedDate(rangeDate);
    onChange(rangeDate);
  };
  const isCustom = selectedOption === "custom";

  return (
    <>
      <Select
        label="Date Range"
        selected={selectedOption}
        options={DEFAULT_OPTIONS}
        onChange={handleOnChange}
      />
      {isCustom ||
        (true && (
          <>
            <DateRangeSelectDay onChange={handleSelectedDate} type="From" />
            <DateRangeSelectDay onChange={handleSelectedDate} type="To" />
          </>
        ))}
    </>
  );
};

DateRange.defaultProps = {
  onChange: () => void 0,
  selected: "any"
};
export default DateRange;
