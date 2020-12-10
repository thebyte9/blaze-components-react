const TYPE_DATE = "date";
const TYPE_DATE_TIME = "dateTime";
const TYPE_TIME = "time";

const DATE_FORMAT_MAP = {
  [TYPE_DATE]: "MMMM d, yyyy",
  [TYPE_DATE_TIME]: "MMMM d, yyyy hh:mm",
  [TYPE_TIME]: "hh:mm",
};

export { TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME, DATE_FORMAT_MAP };
