// @ts-nocheck
import React from "react";
import { DAYS, DAYS_PER_LIST, SEPARATOR } from "../constants";

class DateUtils {
  constructor() {
    this.currentDate = new Date();
  }

  public isToday(dateToCheck: any) {
    return (
      dateToCheck.getDate() === this.currentDate.getDate() &&
      dateToCheck.getMonth() === this.currentDate.getMonth() &&
      dateToCheck.getFullYear() === this.currentDate.getFullYear()
    );
  }

  public getPrevMonth(month: number, year: number) {
    const prevYear = month === 0 ? year - 1 : year;
    const prevMonth = month === 0 ? 11 : month - 1;

    return { prevYear, prevMonth };
  }

  public getNextMonth(month: number, year: number) {
    const nextYear = month === 11 ? year + 1 : year;
    const nextMonth = month === 11 ? 0 : month + 1;

    return { nextYear, nextMonth };
  }

  public getNameOfDays() {
    return DAYS.map((day: string) => <li key={day}>{day}</li>);
  }

  public getFirstDay(year: number, month: number) {
    return new Date(year, month).getDay();
  }

  public getListOfDays(year: number, month: number) {
    return [...new Array(DAYS_PER_LIST)].map((day, i) => {
      const currentDate = new Date(
        year,
        month,
        i + 2 - this.getFirstDay(year, month)
      );

      const currentYearToString = currentDate.getFullYear().toString();
      const currentMonthToString = currentDate.getMonth().toString();
      const currentDateToString = currentDate.getDate().toString();

      return {
        currentDate,
        currentDateToString,
        currentMonthToString,
        currentYearToString
      };
    });
  }

  public padDate(date: string) {
    return date.toString().padStart(2, "0");
  }

  public dateToNumber(DD: string, MM: string, YY: string) {
    return {
      DD: Number(DD),
      MM: Number(MM),
      YY: Number(YY)
    };
  }

  public formatDate(DD: string, MM: string, YY: string) {
    return this.padDate(DD) + SEPARATOR + this.padDate(MM) + SEPARATOR + YY;
  }

  public isInvalidDate(DD: string, MM: string, YY: string) {
    return DD.length !== 2 || MM.length !== 2 || YY.length !== 4;
  }

  public subtractDate(total: number, type: string) {
    const currentDate = new Date();

    const subtractFrom = {
      days: () => currentDate.setDate(currentDate.getDate() - total),
      months: () => currentDate.setMonth(currentDate.getMonth() - total),
      years: () => currentDate.setFullYear(currentDate.getFullYear() - total)
    };

    subtractFrom[type]();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();

    return this.formatDate(date, month, year);
  }
}

export default new DateUtils();
