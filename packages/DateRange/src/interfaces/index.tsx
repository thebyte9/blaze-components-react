type TMoment = object | any;

interface IDateRangeProps {
  children?: any;
  onChange: (args: IOnChangeArguments) => void;
  selected: 1 | 2 | 3 | 7 | 30 | 12 | "custom" | "any";
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
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}

interface IDateRangeDaysProps {
  date: TMoment;
  onClick: (event: any) => void;
  startDate: TMoment;
  endDate: TMoment;
}

interface IGetPreviousMonthDaysProps {
  firstDayDate: TMoment;
  previousMonth: TMoment;
  previousMonthDays: TMoment;
  PreviousMonthDayWrapper: (previousMonth: TMoment) => JSX.Element;
}

interface IGetDaysInMonthProps {
  DayInMonthWrapper: (previousMonth: TMoment) => JSX.Element;
  daysInMonth: TMoment;
  thisDate: TMoment;
  calendar: JSX.Element[];
}

interface IGetNextMonthDaysProps {
  NextMonthDayWrapper: (previousMonth: TMoment) => JSX.Element;
  calendar: JSX.Element[];
  nextsMonth: TMoment;
}

export {
  IDateRangeProps,
  IDateValidation,
  ISubtract,
  TMoment,
  IOnChangeArguments,
  IDateRangeHeadingProps,
  IDateRangeDayProps,
  IDateRangeDaysProps,
  IGetPreviousMonthDaysProps,
  IGetDaysInMonthProps,
  IGetNextMonthDaysProps
};
