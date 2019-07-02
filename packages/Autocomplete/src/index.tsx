import Input from "@blaze-react/input";
import utils from '@blaze-react/utils';
import React, { Fragment, useState } from "react";

interface IAutocompleteProps {
  data: {
    keyValue: string;
    filterBy: string[];
    data: object[];
  };
  utils: {
    uniqueId: (element: any) => string
  };
  selected: (...args: any[]) => any;
  placeholder?: string;
  children?: any;
}
const Autocomplete: React.SFC<IAutocompleteProps> = ({
  data: { data, filterBy: keys, keyValue },
  placeholder,
  selected,
  utils: {
    uniqueId
  },
  children
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const handleChange = ({ value }: { value: string }): void => {
    setShowSelect(true);
    setInputValue(value)
    filterByValue(value);
  };

  const filterByValue = (value: string) => {
    return data.filter((copy: object) => {
      let isMatch = false;
      keys.forEach(key => {
        const match = copy[key].toLowerCase().includes(value.toLowerCase());
        if (match) {
          isMatch = match;
        }
        if (!value) {
          isMatch = false;
        }
      });
      return isMatch;
    });
  }

  const handleClick = (copiedData: object): void => {
    setInputValue(copiedData[keyValue]);
    setShowSelect(false);
    selected(copiedData);
  };

  return (
    <Fragment>

      {children}

      <Input placeholder={placeholder} onChange={handleChange} value={inputValue} />

      {showSelect && filterByValue(inputValue).map(copiedData => (
        <div
          className="panel"
          key={uniqueId(copiedData)}
          onClick={() => handleClick(copiedData)}
          role="button">{copiedData[keyValue]}
        </div>
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
export default utils(Autocomplete);
