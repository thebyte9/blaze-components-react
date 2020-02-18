// @ts-nocheck
import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import init from "./logic";
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
  name?: string;
  id?: string;
  onChange: ({
    event,
    value
  }: {
    event?: React.ChangeEvent<HTMLInputElement>;
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
  name,
  utils: { classNames, ErrorMessage },
  ...attrs
}): JSX.Element => {
  const [inputs, setInputs] = useState<any>(value);
  const [newError, setError] = useState<boolean | undefined>(error);
  const filterRef = useRef(null);

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => {
    if (value) {
      setInputs(value);
      onChange({ value });
    }
  }, [value]);

  useEffect(() => {
    const rangeFilter = init(filterRef.current);
    rangeFilter.onChange = (minvalue: any, maxvalue: any) =>
      onChange({ value: { min: minvalue, max: maxvalue } });
  }, []);

  const modifierClassName: string = classNames({
    [`form-field--${modifier}`]: !!modifier
  });

  const requiredClassName: string = classNames({ required });

  const { min, max, step, minValue, maxValue } = inputs;

  return (
    <div className={`form-field form-field--range ${modifierClassName}`}>
      {label && (
        <label htmlFor={attrs.id} className={requiredClassName}>
          {label}
        </label>
      )}
      <div
        ref={filterRef}
        min={min}
        max={max}
        step={step}
        min-value={minValue}
        max-value={maxValue}
        className="filter"
      >
        <div className="filter-left-handler">
          <span></span>
        </div>
        <div className="filter-right-handler">
          <span></span>
        </div>
        <div className="filter-line">
          <span></span>
        </div>
      </div>
      <div id="result">Min: 0 Max: 140</div>
      {newError && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

RangeFilter.defaultProps = {
  error: false,
  label: "",
  modifier: "",
  name: "",
  validationMessage: "This field is required"
};

export default withUtils(RangeFilter);
