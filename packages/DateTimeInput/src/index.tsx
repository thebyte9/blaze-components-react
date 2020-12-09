import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { DATE_FORMAT_MAP, TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME } from './constants';

// TODO We are not sure about whether this import will work in any context
// import "react-datepicker/dist/react-datepicker.css";

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IDateTimeInputProps {
  disabled?: boolean;
  id?: string;
  label?: string;
  modifier?: string;
  onChange: ({
    event,
    value,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    value: Date;
  }) => void;
  required?: boolean;
  error?: boolean;
  type?: string;
  validationMessage: string | JSX.Element;
  value?: Date;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}

const DateTimeInput: FunctionComponent<IDateTimeInputProps> = ({
  disabled,
  id,
  label,
  modifier,
  onChange,
  required,
  error,
  type,
  validationMessage,
  value,
  utils: { classNames, ErrorMessage },
}): JSX.Element => {
  const [newValue, setNewValue] = useState<Date | undefined>(value);
  const [newError, setError] = useState<boolean | undefined>(error);

  let whitelistedType: string = type as string;
  if (type !== TYPE_TIME && type !== TYPE_DATE) {
    whitelistedType = TYPE_DATE_TIME;
  }

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => {
    setNewValue(value)
  }, [value]);

  const handleChange = (date: Date, event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewValue(date);
    // FIXME the native event is not always returned by react-datepicker
    // See https://byte-9.atlassian.net/browse/BZ2-2130
    onChange({ event, value: date });
  };

  const requiredClassName: string = classNames({ required });

  const modifierClassName: string = classNames({
    [`form-field--${modifier}`]: !!modifier,
  });
  return (
    <div
      className={`form-field form-field--date-time-input ${modifierClassName}`}
    >
      <label htmlFor={id} className={requiredClassName}>
        {label}
      </label>

      <DatePicker
        data-testid="date-time-input"
        id={id}
        onChange={handleChange}
        todayButton="Today"
        showTimeSelect={whitelistedType === TYPE_DATE_TIME || whitelistedType === TYPE_TIME}
        showTimeSelectOnly={whitelistedType === TYPE_TIME}
        dateFormat={DATE_FORMAT_MAP[whitelistedType]}
        selected={newValue}
        disabled={disabled}
        required={required}
      />

      {newError && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

DateTimeInput.defaultProps = {
  disabled: false,
  error: false,
  label: "",
  modifier: "",
  required: false,
  type: TYPE_DATE_TIME,
  validationMessage: "This field is required",
};

export default withUtils(DateTimeInput);
