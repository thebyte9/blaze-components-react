// @ts-nocheck
import moment from "moment/src/moment.js";
import { DAY, DEFAULT_FORMAT } from "../constants";
import { IDateValidation, ISubtract, TMoment } from "../interfaces";

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
}

export default new Moment();
