import { buildClassNames, ErrorMessage } from '@blaze-react/utils';

import React, { FunctionComponent, useEffect, useState } from 'react';
import isContentLoaded from './isContentLoaded';
import initRangeFilter from './logic';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    min?: string;
    max?: string;
    step?: string;
  }
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
  name: string;
  id: string;
  onChange: ({ event, value }: { event?: React.ChangeEvent<HTMLInputElement>; value: IRangeValue }) => void;
  required?: boolean;
  error?: boolean;
  validationMessage: string | JSX.Element;
  value: IRangeValue | unknown;
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
  id,
  ...attrs
}): JSX.Element => {
  const [inputs, setInputs] = useState<any>(value || {});
  const [newError, setError] = useState<boolean | undefined>(error);

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => {
    isContentLoaded(init, reInit);
  }, []);

  const getMinMax = (minvalue: number, maxvalue: number) => {
    const newValue = {
      ...inputs,
      minValue: minvalue,
      maxValue: maxvalue
    };
    onChange({ value: newValue });
    setInputs(newValue);
  };

  const init = () => {
    initRangeFilter(id, getMinMax);
  };

  const reInit = (time = 1000) => {
    setTimeout(init, time);
  };

  const modifierClassName: string = buildClassNames({
    [`form-field--${modifier}`]: !!modifier,
  });

  const requiredClassName: string = buildClassNames({ required });

  const { min = 0, max = 0, step = 1, minValue = 0, maxValue = 0 } = inputs;

  return (
    <div className={`form-field form-field--range ${modifierClassName}`}>
      {label && (
        <label htmlFor={id} className={requiredClassName}>
          {label}
        </label>
      )}
      <div className="values">
        <span>{Number(minValue).toLocaleString('en-US')}</span>
        <span>{Number(maxValue).toLocaleString('en-US')}</span>
      </div>

      <div
        {...attrs}
        min={min}
        max={max}
        step={step}
        id={`${name}Range`}
        className={`range__filter ${id}`}
      >
        <div className="range__filter--left">
          <span></span>
        </div>
        <div className="range__filter--right">
          <span></span>
        </div>
        <div className="range__filter--line">
          <span></span>
        </div>
      </div>
      {newError && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

RangeFilter.defaultProps = {
  error: false,
  label: '',
  modifier: '',
  name: '',
  validationMessage: 'This field is required',
};

export default RangeFilter;
