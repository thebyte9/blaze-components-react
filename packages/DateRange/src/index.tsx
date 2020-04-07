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

  const isCustom = selectedOption === "custom";

  const handleOnChange = ({ value } = {}) => setSelectedOption(value);

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
            <DateRangeSelectDay onChange={onChange} />
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
