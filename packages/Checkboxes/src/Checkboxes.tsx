import ErrorMessage from '../../Utils/src/ErrorMessage';
import React, { FunctionComponent, useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { v4 as uuidv4 } from 'uuid';

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

export interface ICheckboxItem {
  checked: boolean;
  id: string | number;
  value: any;
}

interface ICheckBoxesProps {
  options?: any[] | Record<string, unknown>;
  returnBoolean?: boolean;
  onChange: ({
    event,
    value,
    data,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    value: ICheckboxItem[];
    data: Record<string, unknown>[];
  }) => void;
  error?: boolean;
  name?: string;
  validationMessage?: string | JSX.Element;
  full?: boolean;
}

export { IErrorMessage, ICheckBoxesProps };

const CheckBoxes: FunctionComponent<ICheckBoxesProps> = ({
  returnBoolean,
  onChange: onChangeCheckboxList,
  options,
  error,
  validationMessage,
  name,
  full,
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
            name: checkboxName,
            required,
            show = true,
            value,
          }: any,
          key: number
        ): JSX.Element | null =>
          show ? (
            <Checkbox
              full={full}
              key={id || uuidv4()}
              onChange={onChange}
              checked={checked}
              disabled={disabled}
              id={id}
              label={label}
              name={checkboxName}
              required={required}
              show={show}
              value={value}
            />
          ) : null
      )}
      {error && <ErrorMessage message={validationMessage} />}
    </>
  );
};

CheckBoxes.defaultProps = {
  error: false,
  full: false,
  options: [],
  returnBoolean: false,
  validationMessage: "This field is required",
};

export default CheckBoxes;