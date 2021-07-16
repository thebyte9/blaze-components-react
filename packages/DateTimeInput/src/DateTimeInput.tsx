import { buildClassNames } from '@blaze-react/utils';
import { ErrorMessage } from '@blaze-react/utils';
import React, { FunctionComponent, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { DATE_FORMAT_MAP, TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME } from './constants';

// TODO We are not sure about whether this import will work in any context
// import "react-datepicker/dist/react-datepicker.css";

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
}): JSX.Element => {
  const [newValue, setNewValue] = useState<Date | undefined>(value);
  const [newError, setError] = useState<boolean | undefined>(error);
  const [newOpen, setOpen] = useState<boolean>(false);

  let whitelistedType = '';

  if (type !== TYPE_TIME && type !== TYPE_DATE) {
    whitelistedType = TYPE_DATE_TIME;
  }

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleChange = (date: Date, event: any, forceClose = false): void => {
    setNewValue(date);
    setOpen(!forceClose);

    // make event consistent
    const { target = {} } = event || {};
    target.name = id;
    target.value = date;

    // FIXME the native event is not always returned by react-datepicker
    // See https://byte-9.atlassian.net/browse/BZ2-2130
    onChange({ event: { ...event, target }, value: date });
  };

  const requiredClassName: string = buildClassNames({ required });

  const rootClasses: string = buildClassNames('form-field form-field--date-time-input', {
    [`form-field--${modifier}`]: !!modifier,
  });

  return (
    <div className={rootClasses}>
      <label htmlFor={id} className={requiredClassName}>
        {label}
      </label>

      <DatePicker
        data-testid={id}
        id={id}
        name={id}
        onChange={handleChange}
        onFocus={() => setOpen(true)}
        showTimeInput={[TYPE_TIME, TYPE_DATE_TIME].includes(whitelistedType)}
        showTimeSelectOnly={whitelistedType === TYPE_TIME}
        onClickOutside={() => setOpen(false)}
        popperModifiers={{
          flip: {
            enabled: false,
          },
        }}
        dateFormat={DATE_FORMAT_MAP[whitelistedType]}
        open={newOpen}
        isClearable={true}
        selected={newValue}
        disabled={disabled}
        required={required}
      >
        {(whitelistedType === TYPE_DATE_TIME || whitelistedType === TYPE_DATE) && (
          <div className="react-datepicker__today-button" onClick={(e) => handleChange(new Date(), e, true)}>
            Today
          </div>
        )}
      </DatePicker>

      {newError && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

DateTimeInput.defaultProps = {
  disabled: false,
  error: false,
  label: '',
  modifier: '',
  required: false,
  type: TYPE_DATE_TIME,
  validationMessage: 'This field is required',
};

export default DateTimeInput;
