const PREVIOUS = "<";
const NEXT = ">";
const DEFAULT_FORMAT = "DD-MM-YYYY";
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const WEEKDAYS = 7;
const DAYS_PER_LIST = 42;
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
const SEPARATOR = "/";

export {
  DEFAULT_FORMAT,
  PREVIOUS,
  NEXT,
  WEEKDAYS,
  DEFAULT_OPTIONS,
  DAYS_PER_LIST,
  DAYS,
  MONTHS,
  SEPARATOR
};
