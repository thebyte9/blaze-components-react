// @ts-nocheck
import moment from "moment/src/moment.js";
import { IDateValidation, ISubtract, TMoment } from "../interfaces";

class Moment {
  constructor() {
    this.currentDate = moment();
    this.instance = moment;
    this.format = "DD-MM-YYYY";
  }
  public formatDate(date: TMoment) {
    return date.format(this.format);
  }

  public isNumber(value: string) {
    return Number.isInteger(Number(value));
  }

  public isTheSameDate({ date, dateToEvaluate, type }: IDateValidation) {
    return date.isSame(dateToEvaluate, type);
  }

  public isTheAfterDate({ date, dateToEvaluate, type }: IDateValidation) {
    return date.isAfter(dateToEvaluate, type);
  }

  public isTheBeforeDate({ date, dateToEvaluate, type }: IDateValidation) {
    return date.isBefore(dateToEvaluate, type);
  }

  public subtract({ value, type }: ISubtract) {
    return this.instance().subtract(value, type);
  }
}

export default new Moment();
