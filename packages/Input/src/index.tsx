import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useState } from "react";
import ToggleInputType from "./ToggleInputType";
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}
interface IInputProps {
  disabled?: boolean;
  hideTypeToggle?: boolean;
  id?: string;
  label?: string;
  modifier?: string;
  onChange: ({
    event,
    value,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    value: string | Date;
  }) => void;
  required?: boolean;
  error?: boolean;
  type?: string;
  validationMessage: string | JSX.Element;
  value?: string;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}

const Input: FunctionComponent<IInputProps> = ({
  disabled,
  hideTypeToggle,
  label,
  modifier,
  onChange,
  required,
  type,
  error,
  validationMessage,
  value,
  utils: { classNames, ErrorMessage },
  ...attrs
}): JSX.Element => {
  const initialValue = value ? value : "";

  const [newValue, setNewValue] = useState<string | Date | undefined>(initialValue);
  const [newType, setType] = useState<string | undefined>(type);
  const [newError, setError] = useState<boolean | undefined>(error);

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => {
    const newValue = value === undefined || value === null ? "" : value
    setNewValue(newValue)
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: string | undefined): void => {
    const {
      target: { value: targetValue },
    } = event;
    const unformattedValue = unformatValue(targetValue, type);
    setNewValue(unformattedValue);
    onChange({ event, value: unformattedValue });
  };

  const handleToggleType = (inputType: string): void => {
    setType(inputType);
  };

  const unformatValue = (value: string, type: string | undefined): string | Date => {
    if (type !== 'datetime-local') {
      return value;
    }

    return new Date(value);
  };

  const formatNumberInTwoCharacters = (number: number): string => {
    if (number > 9) {
      return number + '';
    }

    return `0${number}`;
  };

  const formatDatetimeValue = (value: Date): string => {
    const year: string = value.getFullYear() + '';
    const month: string = formatNumberInTwoCharacters(value.getMonth() + 1);
    const day: string = formatNumberInTwoCharacters(value.getDate());
    const hour: string = formatNumberInTwoCharacters(value.getHours());
    const minute: string = formatNumberInTwoCharacters(value.getMinutes());

    return `${year}-${month}-${day}T${hour}:${minute}`;
  };

  const formatValue = (value: any | undefined, type: string | undefined): string | undefined => {
    if (typeof value === 'undefined') {
      return value;
    }

    if (type !== 'datetime-local') {
      return value as string;
    }

    return formatDatetimeValue(typeof value === 'string' ? new Date(value) : value);
  };

  const password: string = "password";

  const isPassword = type === password;

  const requiredClassName: string = classNames({ required });

  const passwordClassName: string = classNames({
    "form-field--password": isPassword,
  });

  const modifierClassName: string = classNames({
    [`form-field--${modifier}`]: !!modifier,
  });

  return (
    <div
      className={`form-field form-field--input ${modifierClassName} ${passwordClassName}`}
    >
      <label htmlFor={attrs.id} className={requiredClassName}>
        {label}
      </label>
      <input
        data-testid="input"
        onChange={(event) => { handleChange(event, newType) }}
        value={formatValue(newValue, newType)}
        disabled={disabled}
        type={newType}
        required={required}
        {...attrs}
      />
      {newError && <ErrorMessage message={validationMessage} />}
      {!hideTypeToggle && isPassword && (
        <ToggleInputType toggleType={handleToggleType} type={newType} />
      )}
    </div>
  );
};
Input.defaultProps = {
  disabled: false,
  error: false,
  hideTypeToggle: false,
  label: "",
  modifier: "",
  required: false,
  type: "text",
  validationMessage: "This field is required",
};
export default withUtils(Input);
