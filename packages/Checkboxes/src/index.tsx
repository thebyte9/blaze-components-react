import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { ICheckBoxesProps } from "./interface";

const CheckBoxes: FunctionComponent<ICheckBoxesProps> = ({
  returnBoolean,
  onChange: onChangeCheckboxList,
  options,
  error,
  validationMessage,
  name,
  utils: { ErrorMessage },
  ...attrs
}): JSX.Element => {
  const formatedOptions = Array.isArray(options) ? options : [options];

  const [data, setData]: any = useState(formatedOptions);

  useEffect(() => setData(formatedOptions), [options]);

  const onChange = ({
    value,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    value: any;
  }): void => {
    if (value.disabled) {
      return;
    }

    const currentIndex = data.findIndex(
      ({ id }: { id: string }) => id === value.id
    );
    if (currentIndex < 0) {
      return;
    }

    data[currentIndex].checked = value.checked;
    setData([...data]);

    let currentValues = data.filter(
      ({ checked }: { checked: boolean }): boolean => checked
    );

    if (returnBoolean) {
      currentValues = !!currentValues.length;
    }

    onChangeCheckboxList({
      data,
      event: { target: { name } },
      value: currentValues,
    } as any);
  };

  return (
    <>
      {data.map(
        (
          {
            checked = false,
            disabled,
            id,
            label,
            name,
            required,
            show = true,
            value,
          }: any,
          key: number
        ): JSX.Element | null =>
          show ? (
            <Checkbox
              key={id}
              onChange={onChange}
              checked={checked}
              disabled={disabled}
              id={id}
              label={label}
              name={name}
              required={required}
              show={show}
              value={value}
              data-cy={
                attrs["data-cy"]
                  ? `${attrs["data-cy"]}-checkbox-cy-${key + 1}`
                  : `checkbox-cy-${key + 1}`
              }
              testId={attrs["test-id"] || `checkbox-${key + 1}`}
            />
          ) : null
      )}
      {error && <ErrorMessage message={validationMessage} />}
    </>
  );
};
CheckBoxes.defaultProps = {
  error: false,
  options: [],
  returnBoolean: false,
  validationMessage: "This field is required",
};
const Checkboxes = withUtils(CheckBoxes);
export { Checkbox, Checkboxes };
