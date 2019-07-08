import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import uuidv1 from "uuid/v1";
interface ICheckboxesProps {
  options?: any[] | object;
  returnBoolean?: boolean;
  onChange: (...args: any) => void;
}
const Checkboxes: FunctionComponent<ICheckboxesProps> = ({
  returnBoolean,
  onChange,
  options,
  ...attrs
}): JSX.Element => {
  const formatedOptions = Array.isArray(options) ? options : [options];

  const [data, setData]: any = useState(formatedOptions);

  useEffect(() => setData(formatedOptions), [options]);

  const toggle = ({ event, item, key }: any): void => {
    if (item.disabled) {
      return;
    }

    data[key].checked = !item.checked;
    setData([...data]);

    let checked = data.filter((option: any): boolean => option.checked);

    if (returnBoolean) {
      checked = !!checked.length;
    }

    onChange({ event, checked, data });
  };

  const requiredClassName: string = "required";

  return (
    <Fragment>
      {data.map(
        (item: any, key: number): JSX.Element => {
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
            return <Fragment key={uuidv1()} />;
          }

          return (
            <div
              data-testid={`checkbox-${key + 1}`}
              key={id}
              className={`form-field form-field--checkbox ${
                required ? requiredClassName : ""
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
  options: [],
  returnBoolean: false
};
export default Checkboxes;
