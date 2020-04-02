type TMoment = object | any;

interface IDateRangeProps {
  children?: any;
  onChange: (...args: any[]) => void;
}

interface IDateValidation {
  date: TMoment;
  dateToEvaluate: any;
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

export {
  IDateRangeProps,
  IDateValidation,
  ISubtract,
  TMoment,
  IOnChangeArguments
};
