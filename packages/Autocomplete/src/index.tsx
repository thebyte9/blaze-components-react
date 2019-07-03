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
}
const Autocomplete: React.SFC<IAutocompleteProps> = ({
  data: { data, filterBy: keys, keyValue },
  placeholder,
  selected,
  utils: {
    uniqueId
  }
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const handleChange = ({ value }: { value: string }): void => {
    setShowSelect(true);
    setInputValue(value);
    filterByValue(value);
  };

  const filterByValue = (value: string): object[] =>
    data.filter((copy: object) =>
      !!keys.some(key => copy[key].toLowerCase().includes(value.toLowerCase()))
    );

  const handleClick = (copiedData: object): void => {
    setInputValue(copiedData[keyValue]);
    setShowSelect(false);
    selected(copiedData);
  };

  return (
    <Fragment>

      <Input placeholder={placeholder} onChange={handleChange} value={inputValue} />

      {showSelect && filterByValue(inputValue).map((copiedData: object): JSX.Element => (
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
  placeholder: "Search",
  selected: (): void => {
    return;
  }
};
export default utils(Autocomplete);
