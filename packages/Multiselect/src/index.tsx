import Checkboxes from "@blaze-react/checkboxes";
import Input from "@blaze-react/input";
import withUtils from "@blaze-react/utils";
import differenceWith from "lodash.differencewith";
import isEqual from "lodash.isequal";
import unionBy from "lodash.unionby";
import React, { FunctionComponent, useEffect, useState } from "react";
import uuidv1 from "uuid/v1";

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
  getSelected: (...args: any[]) => any;
  placeholder?: string;
  children?: any;
  selected?: any[];
  onChange?: (arg: { event: Event; value: string; name: string }) => void;
  error?: boolean;
  name: string;
  validationMessage: string | JSX.Element;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}
const MultiSelect: React.SFC<IMultiSelectProps> = ({
  data: { data, filterBy: keys, keyValue },
  utils: { ErrorMessage },
  validationMessage,
  getSelected,
  placeholder,
  children,
  onChange,
  error,
  name,
  selected
}): JSX.Element => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [dataCopy, setDataCopy] = useState<any>(null);

  useEffect(() => {
    const shouldUpdate =
      differenceWith(dataCopy, data, isEqual).length ||
      differenceWith(data, dataCopy, isEqual).length;
    const elementsWithSelected = unionBy(selected, data, "id");
    if (!dataCopy || shouldUpdate) {
      setDataCopy(elementsWithSelected);
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
          const copyKey = copy[key].toString().toLowerCase();
          return copyKey.includes(value.toLowerCase());
        })
      )
    );

    if (onChange) {
      onChange({ event, value, name });
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
    setSelectedItems(value);
    setDataCopy(localData);
    getSelected({
      event: {
        target: {
          name,
          value
        }
      }
    });
  };

  const parseCheckBoxOptions = (elements: object[]): object[] => {
    return elements
      ? elements.map(
          (element: any): object => ({
            ...element,
            label: element[keyValue]
          })
        )
      : [];
  };

  return (
    <>
      {selectedItems.map(
        (selectedValue): JSX.Element => (
          <div key={uuidv1()}>{selectedValue[keyValue]}</div>
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
  getSelected: () => {
    return;
  },
  onChange: (arg: { event: Event; value: string }) => {
    return arg;
  },
  placeholder: "Search",
  validationMessage: "This field is required"
};
export default withUtils(MultiSelect);
