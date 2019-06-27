import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import uuidv1 from "uuid/v1";
interface ICheckboxesProps {
  options?: any[] | object;
  withEffect?: boolean;
  bool?: boolean;
  onChange: (...args: any) => void;
}
const Checkboxes: FunctionComponent<ICheckboxesProps> = ({
  bool,
  onChange,
  options,
  withEffect,
  ...attrs
}): JSX.Element => {
  const [data, setData]: any = useState(
    Array.isArray(options) ? options : [options]
  );
  useEffect(() => {
    if (withEffect) {
      setData(options);
    }
  }, [options, withEffect]);
  const toggle = ({ event, item, key }: any): void => {
    if (item.disabled) {
      return;
    }
    data[key].checked = !item.checked;
    setData([...data]);
    let checked = data.filter((option: any): boolean => option.checked);
    if (bool) {
      checked = !!checked.length;
    }
    onChange({ event, checked, data });
  };
  return (
    <Fragment>
      {data.map(
        (item: any, key: any): JSX.Element => {
          const {
            checked = false,
            value,
            disabled,
            required,
            label,
            show = true,
            id = uuidv1()
          } = item;
          if (!show) {
            return <Fragment key={id} />;
          }
          return (
            <div
              key={id}
              className={`form-field form-field--checkbox ${
                required ? "required" : ""
              }`}
              onClick={(event): any => toggle({ event, item, key })}
              role="button"
            >
              <input
                readOnly
                type="checkbox"
                className="form-checkbox"
                value={value}
                disabled={disabled}
                checked={checked}
                required={required}
                id={id}
                {...attrs}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          );
        }
      )}
    </Fragment>
  );
};
Checkboxes.defaultProps = {
  bool: false,
  onChange: (): void => {
    return;
  },
  options: [],
  withEffect: false
};
export default Checkboxes;
