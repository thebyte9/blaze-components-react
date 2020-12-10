declare const TYPE_DATE = "date";
declare const TYPE_DATE_TIME = "dateTime";
declare const TYPE_TIME = "time";
declare const DATE_FORMAT_MAP: {
    [TYPE_DATE]: string;
    [TYPE_DATE_TIME]: string;
    [TYPE_TIME]: string;
};
export { TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME, DATE_FORMAT_MAP };
