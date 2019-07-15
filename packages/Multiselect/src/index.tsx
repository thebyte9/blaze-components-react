import Checkboxes from "@blaze-react/checkboxes";
import Input from "@blaze-react/input";
import React, { Fragment, useState } from "react";
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
}
const MultiSelect: React.SFC<IMultiSelectProps> = ({
  data: { data, filterBy: keys, keyValue },
  selected: getSelected,
  placeholder,
  children
}): JSX.Element => {
  const [selected, setSelected] = useState<any[]>([]);
  const [dataCopy, setDataCopy] = useState<object[]>(data);

  const setStatus = (obj: any, status: any): object =>
    Object.assign({}, obj, { show: status });

  const handleInputChange = ({ value }: { value: string }) => {
    const parsedDataCopy = dataCopy.map(copy =>
      setStatus(
        copy,
        !!keys.some(key =>
          copy[key].toLowerCase().includes(value.toLowerCase())
        )
      )
    );

    setDataCopy(parsedDataCopy);
  };

  const handleCheckBoxChange = ({
    checked,
    data: localData
  }: {
    checked: any;
    data: any;
  }) => {
    setSelected(checked);
    setDataCopy(localData);
    getSelected(localData);
  };
  return (
    <Fragment>
      {selected.map(
        (selectedValue): JSX.Element => (
          <div key={uuidv1()}>{selectedValue[keyValue]}</div>
        )
      )}

      {children}

      <Input placeholder={placeholder} onChange={handleInputChange} />
      {
        <Checkboxes
          options={dataCopy.map(
            (copiedData): object =>
              Object.assign({}, copiedData, { label: copiedData[keyValue] })
          )}
          onChange={handleCheckBoxChange}
        />
      }
    </Fragment>
  );
};
MultiSelect.defaultProps = {
  children: "",
  placeholder: "Search"
};
export default MultiSelect;
