// @ts-nocheck
import Select from "@blaze-react/select";
import React, { useState } from "react";
import { IDateRangeProps } from "../interfaces";
import { ANY_DATE, CUSTOM_DATE, DEFAULT_OPTIONS } from "./constants";
import DateRangeSelectDay from "./DateRangeSelectDay";
import { DateUtils } from "./utils";

const DateRange: React.SFC<IDateRangeProps> = ({ onChange, custom }) => {
  const [selectedOption, setSelectedOption] = useState<string | number>(
    custom ? CUSTOM_DATE : ""
  );
  const [selectedDate, setSelectedDate] = useState<object>({});

  const handleOnChange = ({ value } = {}) => {
    setSelectedOption(value);

    if (value !== CUSTOM_DATE && value !== ANY_DATE) {
      const [type, total] = value.split(",");
      const substractedDate = DateUtils.subtractDate(total, type);
      onChange({ selectedDate: substractedDate });
    }
  };

  const handleSelectedDate = (date: any) => {
    const rangeDate = {
      ...selectedDate,
      ...date,
    };
    setSelectedDate(rangeDate);
    onChange({ selectedDate: { ...rangeDate } });
  };

  const isCustom = selectedOption === CUSTOM_DATE;

  return (
    <>
      <Select
        label="Date Range"
        selected={selectedOption}
        options={DEFAULT_OPTIONS}
        onChange={handleOnChange}
      />
      {isCustom && (
        <>
          <DateRangeSelectDay onChange={handleSelectedDate} type="From" />
          <DateRangeSelectDay onChange={handleSelectedDate} type="To" />
        </>
      )}
    </>
  );
};

DateRange.defaultProps = {
  custom: false,
  onChange: () => void 0,
};
export default DateRange;
