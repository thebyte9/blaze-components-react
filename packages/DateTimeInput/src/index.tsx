
import withUtils from "@blaze-react/utils";
import PropTypes from "prop-types";
import React, { FunctionComponent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME } from './constants';

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
    value,
  }: {
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

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => {
    setNewValue(value)
  }, [value]);

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
        onChange={(date: Date) => {
          onChange({ value: date });
          setNewValue(date);
        }}
        todayButton="Today"
        showTimeSelect={type === TYPE_DATE_TIME || type === TYPE_TIME}
        showTimeSelectOnly={type === TYPE_TIME}
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
  type: TYPE_DATE,
  validationMessage: "This field is required",
};

DateTimeInput.propTypes = {
  type: PropTypes.oneOf([TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME]),
};

export default withUtils(DateTimeInput);
