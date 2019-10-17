import withUtils from "@blaze-react/utils";
import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface ICheckboxesProps {
  options?: any[] | object;
  returnBoolean?: boolean;
  onChange: ({
    event,
    value,
    data
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    value: boolean | object;
    data: object[];
  }) => void;
  error?: boolean;
  validationMessage: string | JSX.Element;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}
const Checkboxes: FunctionComponent<ICheckboxesProps> = ({
  returnBoolean,
  onChange,
  options,
  error,
  validationMessage,
  utils: { uniqueId, classNames, ErrorMessage },
  ...attrs
}): JSX.Element => {
  const formatedOptions = Array.isArray(options) ? options : [options];

  const [data, setData]: any = useState(formatedOptions);

  useEffect(() => setData(formatedOptions), [options]);

  const toggle = ({
    event,
    item,
    key
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    item: any;
    key: number;
  }): void => {
    if (item.disabled) {
      return;
    }

    data[key].checked = !item.checked;
    setData([...data]);

    let value = data.filter(
      ({ checked }: { checked: boolean }): boolean => checked
    );

    if (returnBoolean) {
      value = !!value.length;
    }

    onChange({ event, value, data });
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

          const checkboxClassName = classNames(
            "form-field form-field--checkbox",
            { required }
          );

          return (
            <div
              data-testid={`checkbox-${key + 1}`}
              key={id}
              className={checkboxClassName}
              onClick={(event): void => toggle({ event, item, key })}
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
      {error && <ErrorMessage message={validationMessage} />}
    </Fragment>
  );
};
Checkboxes.defaultProps = {
  error: false,
  options: [],
  returnBoolean: false,
  validationMessage: "This field is required"
};
export default withUtils(Checkboxes);
