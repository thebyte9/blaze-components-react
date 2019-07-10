import withUtils from "@blaze-react/utils";
import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
interface ICheckboxesProps {
  options?: any[] | object;
  returnBoolean?: boolean;
  onChange: (...args: any) => void;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (...args: any) => string;
  };
}
const Checkboxes: FunctionComponent<ICheckboxesProps> = ({
  returnBoolean,
  onChange,
  options,
  utils: { uniqueId, classNames },
  ...attrs
}): JSX.Element => {
  const {
    formClassName,
    formatedOptions
  }: { formClassName: string; formatedOptions: object[] } = Array.isArray(
    options
  )
    ? {
        formClassName: "form-group form-group--checkbox",
        formatedOptions: options
      }
    : {
        formClassName: "form-field form-field--checkbox",
        formatedOptions: [options]
      };

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
            id = uniqueId(item)
          } = item;

          if (!show) {
            return <Fragment key={id} />;
          }

          const requiredClassName = classNames({ required });

          return (
            <div
              data-testid={`checkbox-${key + 1}`}
              key={id}
              className={`${formClassName} ${requiredClassName}`}
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
export default withUtils(Checkboxes);
