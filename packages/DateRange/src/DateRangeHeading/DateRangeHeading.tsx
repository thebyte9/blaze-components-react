// @ts-nocheck

import React, { useEffect, useState } from "react";

interface IDateRangeHeadingProps {
  date: any;
  changeMonth: (month: any) => void;
  resetDate: () => void;
}

const DateRangeHeading = ({
  date,
  changeMonth,
  resetDate
}: IDateRangeHeadingProps): JSX.Element => {
  const [activeDate, setActiveDate] = useState(date);

  useEffect(() => {
    setActiveDate(date);
  }, [date]);

  return (
    <nav className="calendar--nav">
      <a onClick={() => changeMonth(activeDate.month() - 1)}> {"<"}</a>

      <h1 onClick={() => resetDate()}>
        {activeDate.format("MMMM")} <small>{activeDate.format("YYYY")}</small>
      </h1>

      <a onClick={() => changeMonth(activeDate.month() + 1)}> {">"} </a>
    </nav>
  );
};

export default DateRangeHeading;
