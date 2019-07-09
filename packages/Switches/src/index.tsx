import React, { FunctionComponent, useState } from "react";
import uuidv1 from "uuid/v1";
interface ICheckboxesProps {
  labelPosition?: string;
  options?: any[] | object;
  modifier?: string;
  returnBoolean?: boolean;
  onChange: (...args: any) => void;
}
const Checkboxes: FunctionComponent<ICheckboxesProps> = ({
  labelPosition,
  onChange,
  options,
  modifier,
  returnBoolean,
  ...attrs
}): JSX.Element => {
  const formatedOptions = Array.isArray(options) ? options : [options];

  const [data, setData]: any = useState(formatedOptions);

  const toggle = ({
    event,
    item,
    key
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    item: object | any;
    key: number;
  }): void => {
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

  const setModifier = (): string => (modifier ? `switch--${modifier}` : "");

  return data.map(
    (item: any, key: number): JSX.Element => {
      const {
        checked = false,
        value,
        disabled,
        required,
        label,
        id = uuidv1()
      } = item;

      return (
        <div
          className={`switch ${setModifier()} switch--label--${labelPosition}`}
          key={id}
        >
          <div className="switch__text">{label}</div>
          <div className="switch__item">
            <input
              readOnly
              type="checkbox"
              value={value}
              disabled={disabled}
              checked={checked}
              required={required}
              onChange={(event): any => toggle({ event, item, key })}
              id={id}
              {...attrs}
            />
            <label htmlFor={id}>toggle</label>
          </div>
        </div>
      );
    }
  );
};
Checkboxes.defaultProps = {
  labelPosition: "right",
  modifier: "",
  options: [],
  returnBoolean: false
};
export default Checkboxes;
