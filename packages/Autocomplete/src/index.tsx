// import Checkboxes from "@blaze-react/checkboxes";
import Input from "@blaze-react/input";
import React, { Fragment, useState } from "react";
import uuidv1 from "uuid/v1";
interface IAutocompleteProps {
  data: {
    keyValue: string;
    filterBy: any[];
    data: object[];
  };
  selected: (...args: any[]) => any;
  placeholder?: string;
  children?: any;
}
const Autocomplete: React.SFC<IAutocompleteProps> = ({
  data: { data, filterBy: keys, keyValue },
  placeholder,
  selected,
  children
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showSelect, setShowSelect] = useState(false);

  const handleChange = ({value}: {value: string}) => {
    setShowSelect(true);
    setInputValue(value)
    filterByValue(value);
  };

  const filterByValue = (value: string) => {
    return data.filter(copy => {
      let isMatch = false;
      keys.forEach(key => {
        const match = copy[key].toLowerCase().includes(value.toLowerCase());
        if (match) isMatch = match;
        if (!value) isMatch = false;
      });
      return isMatch;
    });
  }

  const handleClick = (copiedData: object) => {
    setInputValue(copiedData[keyValue]);
    setShowSelect(false);
    selected(copiedData);
  };

  return (
    <Fragment>

      {children}

      <Input placeholder={placeholder} onChange={handleChange} value={inputValue}/>

      {showSelect && filterByValue(inputValue).map(copiedData => (
        <div className="panel" key={uuidv1()} onClick={() => handleClick(copiedData)} role="button">{copiedData[keyValue]}</div>
      ))}

    </Fragment>
  );
};
Autocomplete.defaultProps = {
  children: "",
  placeholder: "Search",
  selected: (): void => {
    return;
  }
};
export default Autocomplete;
