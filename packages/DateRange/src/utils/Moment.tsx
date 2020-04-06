// @ts-nocheck
import moment from "moment";
import { DAY, DAY_FORMAT, DEFAULT_FORMAT } from "../constants";
import {
  IDateValidation,
  IGetDaysInMonthProps,
  IGetNextMonthDaysProps,
  IGetPreviousMonthDaysProps,
  ISubtract,
  TMoment
} from "../interfaces";

class Moment {
  constructor() {
    this.currentDate = moment();
    this.instance = moment;
    this.format = DEFAULT_FORMAT;
  }
  public formatDate(date: TMoment | null, format?: string) {
    if (!date) {
      return;
    }
    return date.format(format || this.format);
  }

  public isNumber(value: string) {
    return Number.isInteger(Number(value));
  }

  public isTheSameDate({ date, dateToEvaluate, type = DAY }: IDateValidation) {
    return date.isSame(dateToEvaluate, type);
  }

  public isTheAfterDate({ date, dateToEvaluate, type = DAY }: IDateValidation) {
    return date.isAfter(dateToEvaluate, type);
  }

  public isTheBeforeDate({
    date,
    dateToEvaluate,
    type = DAY
  }: IDateValidation) {
    return date.isBefore(dateToEvaluate, type);
  }

  public isTodaysDate({
    date,
    startDate,
    endDate,
    type = DAY
  }: IDateValidation) {
    return (
      this.isTheSameDate({
        date,
        dateToEvaluate: startDate,
        type
      }) &&
      this.isTheSameDate({
        date,
        dateToEvaluate: endDate,
        type
      })
    );
  }

  public subtract({ value, type }: ISubtract) {
    return this.instance().subtract(value, type);
  }

  public previousDate(date: TMoment) {
    return date.month() - 1;
  }

  public nextDate(date: TMoment) {
    return date.month() + 1;
  }

  public isToday(date: TMoment, type: string) {
    return this.instance().isSame(date, type);
  }

  public getDayName(dayNumber: number) {
    return this.instance()
      .day(dayNumber)
      .format(DAY_FORMAT);
  }

  public getPreviousMonthDays({
    firstDayDate,
    previousMonth,
    previousMonthDays,
    PreviousMonthDayWrapper
  }: IGetPreviousMonthDaysProps) {
    const days = [];

    for (let i = firstDayDate.day(); i > 1; i--) {
      previousMonth.date(previousMonthDays - i + 2);
      days.push(PreviousMonthDayWrapper(previousMonth));
    }
    return days;
  }

  public getNextMonthDays({
    NextMonthDayWrapper,
    calendar,
    nextsMonth
  }: IGetNextMonthDaysProps) {
    const daysCount = calendar.length;
    for (let i = 1; i <= 42 - daysCount; i++) {
      nextsMonth.date(i);
      calendar.push(NextMonthDayWrapper(nextsMonth));
    }
    return calendar;
  }

  public getDaysInMonth({
    DayInMonthWrapper,
    daysInMonth,
    thisDate,
    calendar
  }: IGetDaysInMonthProps) {
    for (let i = 1; i <= daysInMonth; i++) {
      thisDate.date(i);
      calendar.push(DayInMonthWrapper(thisDate));
    }

    return calendar;
  }
}

export default new Moment();
