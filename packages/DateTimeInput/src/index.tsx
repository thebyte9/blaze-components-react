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
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>;
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
  const [newOpen, setOpen] = useState<boolean>(false);

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

  const handleChange = (date: Date, event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setNewValue(date);
    setOpen(false);
    // FIXME the native event is not always returned by react-datepicker
    // See https://byte-9.atlassian.net/browse/BZ2-2130
    onChange({ event, value: date });
  };

  const requiredClassName: string = classNames({ required });

  const rootClasses: string = classNames('form-field form-field--date-time-input', {
    [`form-field--${modifier}`]: !!modifier,
  });

  return (
    <div
      className={rootClasses}
    >
      <label htmlFor={id} className={requiredClassName}>
        {label}
      </label>

      <DatePicker
        data-testid="date-time-input"
        id={id}
        onChange={handleChange}
        onFocus={() => setOpen(true)}
        showTimeInput={whitelistedType === TYPE_DATE_TIME}
        showTimeSelect={whitelistedType === TYPE_TIME}
        showTimeSelectOnly={whitelistedType === TYPE_TIME}
        dateFormat={DATE_FORMAT_MAP[whitelistedType]}
        open={newOpen}
        isClearable={true}
        selected={newValue}
        disabled={disabled}
        required={required}
      >
        {(whitelistedType === TYPE_DATE_TIME || whitelistedType === TYPE_DATE) && <div
          className="react-datepicker__today-button"
          onClick={e => handleChange(new Date(), e)}
        >Today</div>}
      </DatePicker>

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
