import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useState } from "react";

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}
interface IRangeValue {
  value?: string;
  step?: number;
  min?: number;
  max?: number;
}
interface IRangeFilterProps {
  label?: string;
  modifier?: string;
  id?: string;
  onChange: ({
    event,
    value
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    value: IRangeValue;
  }) => void;
  required?: boolean;
  error?: boolean;
  validationMessage: string | JSX.Element;
  value: IRangeValue | any;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}

const RangeFilter: FunctionComponent<IRangeFilterProps> = ({
  label,
  modifier,
  onChange,
  required,
  error,
  validationMessage,
  value,
  utils: { classNames, ErrorMessage },
  ...attrs
}): JSX.Element => {
  const [inputs, setInputs] = useState<any>(value);
  const [newError, setError] = useState<boolean | undefined>(error);

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => setInputs(value), [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: targetValue, name }
    } = event;

    const newValues = {
      ...inputs,
      [name]: {
        ...inputs[name],
        value: parseFloat(targetValue)
      }
    };

    setInputs(newValues);

    onChange({ event, value: newValues });
  };

  const modifierClassName: string = classNames({
    [`form-field--${modifier}`]: !!modifier
  });

  const requiredClassName: string = classNames({ required });

  return (
    <div className={`form-field form-field--range ${modifierClassName}`}>
      {label && (
        <label htmlFor={attrs.id} className={requiredClassName}>
          {label}
        </label>
      )}
      <div className="range_fields">
        {Object.keys(inputs).map(key => (
          <>
            <input
              type="range"
              data-testid="input"
              name={key}
              key={key}
              onChange={handleChange}
              {...inputs[key]}
              {...attrs}
            />
            <span>{inputs[key].value}</span>
          </>
        ))}
      </div>

      {newError && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

RangeFilter.defaultProps = {
  error: false,
  label: "",
  modifier: "",
  validationMessage: "This field is required"
};

export default withUtils(RangeFilter);
