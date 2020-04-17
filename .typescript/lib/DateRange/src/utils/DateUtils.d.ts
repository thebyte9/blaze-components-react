/// <reference types="react" />
declare class DateUtils {
    constructor();
    isToday(dateToCheck: any): boolean;
    getPrevMonth(month: number, year: number): {
        prevYear: number;
        prevMonth: number;
    };
    getNextMonth(month: number, year: number): {
        nextYear: number;
        nextMonth: number;
    };
    getNameOfDays(): JSX.Element[];
    getFirstDay(year: number, month: number): number;
    getListOfDays(year: number, month: number): {
        currentDate: Date;
        currentDateToString: string;
        currentMonthToString: string;
        currentYearToString: string;
    }[];
    padDate(date: string): string;
    dateToNumber(DD: string, MM: string, YY: string): {
        DD: number;
        MM: number;
        YY: number;
    };
    formatDate(DD: string, MM: string, YY: string): string;
    isInvalidDate(DD: string, MM: string, YY: string): boolean;
    subtractDate(total: number, type: string): any;
}
declare const _default: DateUtils;
export default _default;
