const TYPE_DATE = "date";
const TYPE_DATE_TIME = "dateTime";
const TYPE_TIME = "time";

interface Map {
  [index: string]: string;
}

const DATE_FORMAT_MAP: Map = {
  [TYPE_DATE]: "MMMM d, yyyy",
  [TYPE_DATE_TIME]: "MMMM d, yyyy HH:mm",
  [TYPE_TIME]: "HH:mm",
};

export { TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME, DATE_FORMAT_MAP };
