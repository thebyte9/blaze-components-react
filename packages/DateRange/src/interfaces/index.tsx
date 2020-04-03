type TMoment = object | any;

interface IDateRangeProps {
  children?: any;
  onChange: (...args: any[]) => void;
}

interface IDateValidation {
  date: TMoment;
  dateToEvaluate?: TMoment;
  startDate?: TMoment;
  endDate?: TMoment;
  type: string;
}

interface ISubtract {
  value: number | string;
  type: string;
}

interface IOnChangeArguments {
  end?: string;
  start?: string;
  selectedDate?: string;
}

interface IDateRangeHeadingProps {
  date: TMoment;
  changeMonthTo: (month: TMoment) => void;
  resetDate: () => void;
}

interface IDateRangeDayProps {
  date: TMoment;
  currentDate: TMoment;
  onClick: (event: any) => void;
  startDate: TMoment;
  endDate: TMoment;
}

export {
  IDateRangeProps,
  IDateValidation,
  ISubtract,
  TMoment,
  IOnChangeArguments,
  IDateRangeHeadingProps,
  IDateRangeDayProps
};
