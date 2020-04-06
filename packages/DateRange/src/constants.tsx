const MONTH_FORMAT = "MMMM";
const YEAR_FORMAT = "YYYY";
const DAY_FORMAT = "ddd";
const PREVIOUS = "<";
const NEXT = ">";
const DAY = "day";
const MONTH = "month";
const DEFAULT_FORMAT = "DD-MM-YYYY";
const WEEKDAYS = 7;
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

export {
  DEFAULT_FORMAT,
  MONTH,
  YEAR_FORMAT,
  MONTH_FORMAT,
  PREVIOUS,
  NEXT,
  DAY,
  DAY_FORMAT,
  WEEKDAYS,
  DEFAULT_OPTIONS
};
