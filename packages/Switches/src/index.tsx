import React, { Fragment, FunctionComponent, useState } from "react";
import uuidv1 from "uuid/v1";
interface ICheckboxesProps {
  options?: any[] | object;
  modifier?: string;
  onChange: (...args: any) => void;
}
const Checkboxes: FunctionComponent<ICheckboxesProps> = ({
  onChange,
  options,
  modifier,
  ...attrs
}): JSX.Element => {
  const formatedOptions = Array.isArray(options) ? options : [options];

  const [data, setData]: any = useState(formatedOptions);

  const toggle = ({ event, item, key }: any): void => {
    if (item.disabled) {
      return;
    }

    data[key].checked = !item.checked;
    setData([...data]);

    const checked = data.filter((option: any): boolean => option.checked);

    onChange({ event, checked, data });
  };

  const setModifier = (): string => {
    if (modifier) {
      return `switch switch--${modifier}`;
    }
    return "";
  };

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
            id = uuidv1()
          } = item;

          return (
            <div className="switch__wrapper">
              <div className={`switch switch--${setModifier()}`}>
                <div className="switch__item">
                  <input
                    data-testid={`checkbox-${key + 1}`}
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
                  <label htmlFor={id}>{label}</label>
                </div>
              </div>
            </div>
          );
        }
      )}
    </Fragment>
  );
};
Checkboxes.defaultProps = {
  modifier: "",
  options: []
};
export default Checkboxes;
