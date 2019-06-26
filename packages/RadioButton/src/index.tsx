import React, { Fragment, useState } from "react";
type RadioButtonProps = {
  options: any[],
  required?: boolean,
  onChange: (...args: any[]) => any
};
const RadioButton: React.SFC<RadioButtonProps> = ({
  onChange,
  options,
  required,
  ...attrs
}) => {
  const [selected, setSelected] = useState<{ value: string | any }>({ value: null });
  const handleSelect = ({ event, item }: { event: any, item: any }) => {
    if (item.disabled) return;
    setSelected(item);
    onChange({ event, selected: item });
  };
  return (
    <Fragment>
      {required && <span className="required" />}
      {options.map(item => {
        const { value, disabled, label, id } = item;
        return (
          <div
            key={label}
            className="form-field form-field--radio"
            onClick={event => handleSelect({ event, item })}
            role="button"
          >
            <input
              readOnly
              type="radio"
              className="form-radio"
              value={value}
              disabled={disabled}
              checked={value === selected.value}
              id={id}
              {...attrs}
            />
            <label htmlFor={id}>{label}</label>
          </div>
        );
      })}
    </Fragment>
  );
};
RadioButton.defaultProps = {
  options: [],
  required: false,
  onChange: () => { }
};
export default RadioButton;
