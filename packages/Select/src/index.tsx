import React, { Fragment, InputHTMLAttributes, useState } from "react";
interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  keys?: any[];
  options: any[];
  required?: boolean;
  onChange: (...args: any[]) => any;
  selected?: any;
  id?: string;
}
const Select: React.SFC<ISelectProps> = ({
  label,
  required,
  onChange,
  options,
  selected,
  keys,
  ...attrs
}) => {
  const [selectedOption, setSelectedOption] = useState(selected);
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    onChange({ event, value: event.target.value });
  };
  const isRequired = required ? "required" : "";
  const setOption = (value: string, text?: string) => (
    <option key={value} value={value}>
      {text || value}
    </option>
  );
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
    <Fragment>
      {label && (
        <label htmlFor={attrs.id} className={isRequired}>
          {label}
        </label>
      )}
      <select
        onChange={handleChange}
        defaultValue={selectedOption}
        disabled={!options.length}
        {...attrs}
      >
        <option>Please Choose...</option>
        {renderOptions()}
      </select>
    </Fragment>
  );
};
Select.defaultProps = {
  keys: [],
  label: "",
  onChange: (): void => {
    return;
  },
  options: [],
  required: false,
  selected: ""
};
export default Select;
