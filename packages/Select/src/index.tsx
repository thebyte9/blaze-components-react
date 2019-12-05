import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useState } from "react";
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface ISelectProps {
  label?: string;
  keys?: string[];
  options: any[];
  required?: boolean;
  onChange: ({
    event,
    value
  }: {
    event: React.ChangeEvent<HTMLSelectElement>;
    value: string;
  }) => void;
  error?: boolean;
  validationMessage: string | JSX.Element;
  selected?: any;
  id?: string;
  disabled?: any[],
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}
const Select: React.SFC<ISelectProps> = ({
  label,
  required,
  onChange,
  options,
  selected,
  keys,
  error,
  validationMessage,
  disabled,
  utils: { classNames, ErrorMessage },
  ...attrs
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(selected);

  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value }
    } = event;
    setSelectedOption(value);
    onChange({ event, value });
  };

  const requiredClassName: string = classNames({
    required
  });

  const setOption = (value: string, text?: string): JSX.Element => {
    const isDisabled = disabled && disabled.includes(value);
    return (
      <option key={value} value={value} disabled={isDisabled}>
        {text || value}
      </option>
    )
  };

  const renderOptions = () => {
    const [first]: any = options;
    if (typeof first === "string") {
      return options.map(option => setOption(option));
    }
    if (first instanceof Array) {
      return options.map(([value, text]) => setOption(value, text));
    }
    return options.map(option => {
      const [value, text]: any = keys;
      return setOption(option[value], option[text]);
    });
  };

  return (
    <div className="form-field form-field--select">
      {label && (
        <label htmlFor={attrs.id} className={requiredClassName}>
          {label}
        </label>
      )}
      <select
        onChange={handleChange}
        disabled={!options.length}
        value={selectedOption}
        {...attrs}
      >
        <option defaultValue={selectedOption} disabled={!!selectedOption}>
          Please Choose...
        </option>
        {renderOptions()}
      </select>
      {error && <ErrorMessage message={validationMessage} />}
    </div>
  );
};
Select.defaultProps = {
  disabled: [],
  error: false,
  keys: [],
  label: "",
  onChange: (): void => {
    return;
  },
  options: [],
  required: false,
  selected: "",
  validationMessage: "This field is required"
};
export default withUtils(Select);
