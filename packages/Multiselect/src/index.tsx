import Checkboxes from "@blaze-react/checkboxes";
import Input from "@blaze-react/input";

import withUtils from "@blaze-react/utils";
import differenceWith from "lodash.differencewith";
import isEqual from "lodash.isequal";
import React, { FunctionComponent, useEffect, useState } from "react";

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IMultiSelectProps {
  data: {
    keyValue: string;
    filterBy: any[];
    data: object[];
  };
  selected: (...args: any[]) => any;
  error?: boolean;
  validationMessage: string | JSX.Element;
  placeholder?: string;
  utils: {
    uniqueId: (element: any) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
  children?: any;
  onChange?: (arg: { event: Event; value: string }) => void;
}
const MultiSelect: React.SFC<IMultiSelectProps> = ({
  data: { data, filterBy: keys, keyValue },
  selected: getSelected,
  error,
  validationMessage,
  placeholder,
  utils: { ErrorMessage, uniqueId },
  onChange,
  children
}): JSX.Element => {
  const [selected, setSelected] = useState<any[]>([]);
  const [dataCopy, setDataCopy] = useState<object[]>(data);

  useEffect(() => {
    const shouldUpdate =
      differenceWith(dataCopy, data, isEqual).length ||
      differenceWith(data, dataCopy, isEqual).length;
    if (shouldUpdate) {
      setDataCopy(data);
    }
  }, [data]);

  const setStatus = (obj: any, status: any): object =>
    Object.assign({}, obj, { show: status });

  const handleInputChange = ({
    event,
    value
  }: {
    event: Event;
    value: string;
  }) => {
    const parsedDataCopy = dataCopy.map((copy: any) =>
      setStatus(
        copy,
        !!keys.some(key => {
          const copyKey = copy[key].toLowerCase();
          return copyKey.includes(value.toLowerCase());
        })
      )
    );

    if (onChange) {
      onChange({ event, value });
    }
    setDataCopy(parsedDataCopy);
  };

  const handleCheckBoxChange = ({
    value,
    data: localData
  }: {
    value: any;
    data: any;
  }) => {
    setSelected(value);
    setDataCopy(localData);
    getSelected(localData);
  };

  const parseCheckBoxOptions = (elements: object[]): object[] =>
    elements.map(
      (copiedData: any): object => ({
        ...copiedData,
        label: copiedData[keyValue]
      })
    );

  return (
    <>
      {selected.map(
        (selectedValue): JSX.Element => (
          <div key={uniqueId(selectedValue[keyValue])}>
            {selectedValue[keyValue]}
          </div>
        )
      )}
      {children}
      <Input placeholder={placeholder} onChange={handleInputChange} />

      {error && <ErrorMessage message={validationMessage} />}

      <Checkboxes
        options={parseCheckBoxOptions(dataCopy)}
        onChange={handleCheckBoxChange}
      />
    </>
  );
};
MultiSelect.defaultProps = {
  children: "",
  error: false,
  onChange: (arg: { event: Event; value: string }) => {
    return arg;
  },
  placeholder: "Search",
  validationMessage: "This field is required"
};
export default withUtils(MultiSelect);
