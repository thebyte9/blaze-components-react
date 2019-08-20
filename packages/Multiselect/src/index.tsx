import Checkboxes from "@blaze-react/checkboxes";
import Input from "@blaze-react/input";
import differenceWith from "lodash.differencewith";
import isEqual from "lodash.isequal";
import React, { useEffect, useState } from "react";
import uuidv1 from "uuid/v1";

interface IMultiSelectProps {
  data: {
    keyValue: string;
    filterBy: any[];
    data: object[];
  };
  selected: (...args: any[]) => any;
  placeholder?: string;
  children?: any;
  onChange?: (arg: { event: Event; value: string }) => void;
}
const MultiSelect: React.SFC<IMultiSelectProps> = ({
  data: { data, filterBy: keys, keyValue },
  selected: getSelected,
  placeholder,
  children,
  onChange
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
    getSelected({event: {
      target: {
        value: localData
      }
    }});
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
          <div key={uuidv1()}>{selectedValue[keyValue]}</div>
        )
      )}
      {children}
      <Input placeholder={placeholder} onChange={handleInputChange} />
      <Checkboxes
        options={parseCheckBoxOptions(dataCopy)}
        onChange={handleCheckBoxChange}
      />
    </>
  );
};
MultiSelect.defaultProps = {
  children: "",
  onChange: (arg: { event: Event; value: string }) => {
    return arg;
  },
  placeholder: "Search",
  selected: () => {
    return;
  }
};
export default MultiSelect;
