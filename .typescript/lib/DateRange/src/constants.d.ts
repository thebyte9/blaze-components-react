/// <reference types="react" />
declare const PREVIOUS = "<";
declare const NEXT = ">";
declare const DEFAULT_FORMAT = "DD-MM-YYYY";
declare const DAYS: string[];
declare const MONTHS: string[];
declare const WEEKDAYS = 7;
declare const DAYS_PER_LIST = 42;
declare const DEFAULT_OPTIONS: (string | import("react").ReactText[])[][];
declare const SEPARATOR = "/";
declare const CUSTOM_DATE = "custom";
declare const ANY_DATE = "any";
declare const TYPE: {
    days: string;
    months: string;
    years: string;
};
export { DEFAULT_FORMAT, PREVIOUS, NEXT, WEEKDAYS, DEFAULT_OPTIONS, DAYS_PER_LIST, DAYS, MONTHS, SEPARATOR, ANY_DATE, CUSTOM_DATE, TYPE };
