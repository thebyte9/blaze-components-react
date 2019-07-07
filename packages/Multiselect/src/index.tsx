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
}) => {
  const [selected, setSelected] = useState([]);
  const [dataCopy, setDataCopy] = useState(data);
  const setStatus = (obj: any, status: any) =>
    Object.assign({}, obj, { show: status });
  const handleKeyUp = (event: any) => {
    const {
      target: { value }
    } = event;
    const parsedDataCopy = dataCopy.map(copy => {
      let newCopy = setStatus(copy, false);
      keys.forEach(key => {
        const match = copy[key].toLowerCase().includes(value.toLowerCase());
        if (match) {
          newCopy = setStatus(copy, true);
        }
      });
      return newCopy;
    });
    setDataCopy(parsedDataCopy);
  };
  const handleChange = ({
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
      {selected.map(selectedValue => (
        <div key={uuidv1()}>{selectedValue[keyValue]}</div>
      ))}

      {children}

      <Input placeholder={placeholder} onKeyUp={handleKeyUp} />
      {
        <Checkboxes
          options={dataCopy.map(copiedData =>
            Object.assign({}, copiedData, { label: copiedData[keyValue] })
          )}
          onChange={handleChange}
        />
      }
    </Fragment>
  );
};
MultiSelect.defaultProps = {
  children: "",
  placeholder: "Search",
  selected: (): void => {
    return;
  }
};
export default MultiSelect;
