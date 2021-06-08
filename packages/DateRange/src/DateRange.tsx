import Select from '@blaze-react/select';
import React, { useState } from 'react';
import { ANY_DATE, CUSTOM_DATE, DEFAULT_OPTIONS } from './constants';
import DateRangeSelectDay from './DateRangeSelectDay';
import { DateUtilsSingleton } from './utils';

interface IDateRangeProps {
  children?: any;
  onChange: (args: IOnChangeArguments) => void;
  selected: 1 | 2 | 3 | 7 | 30 | 12 | 'custom' | 'any';
  custom?: false;
}
interface IOnChangeArguments {
  end?: string;
  start?: string;
  selectedDate?: string;
}

const DateRange: React.SFC<IDateRangeProps> = ({ onChange, custom }) => {
  const [selectedOption, setSelectedOption] = useState<string>(custom ? CUSTOM_DATE : '');
  const [selectedDate, setSelectedDate] = useState<Record<string, unknown>>({});

  const handleOnChange = ({ value }: { event: React.ChangeEvent<HTMLSelectElement>; value: string }) => {
    setSelectedOption(value);

    if (value !== CUSTOM_DATE && value !== ANY_DATE) {
      const [type, total] = value.split(',');
      const substractedDate = DateUtilsSingleton.subtractDate(Number(total), type);
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
      <Select label="Date Range" selected={selectedOption} options={DEFAULT_OPTIONS} onChange={handleOnChange} />
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
