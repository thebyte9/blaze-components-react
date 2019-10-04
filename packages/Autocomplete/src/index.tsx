import Input from "@blaze-react/input";
import WithUtils from "@blaze-react/utils";
import React, { Fragment, useState } from "react";

interface IAutocompleteProps {
  data: {
    keyValue: string;
    filterBy: string[];
    data: object[];
  };
  utils: {
    uniqueId: (element: any) => string;
  };
  selected: (...args: any[]) => any;
  label?: string;
  placeholder?: string;
}
const Autocomplete: React.SFC<IAutocompleteProps> = ({
  data: { data, filterBy: keys, keyValue },
  label,
  placeholder,
  selected,
  utils: { uniqueId }
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const handleChange = ({ value }: { value: string }): void => {
    setShowSelect(true);
    setInputValue(value);
    filterByValue(value);
  };

  const filterByValue = (value: string): object[] =>
    data.filter(
      (copy: object) =>
        !!keys.some(key =>
          copy[key].toLowerCase().includes(value.toLowerCase())
        )
    );

  const handleClick = (copiedData: object): void => {
    setInputValue(copiedData[keyValue]);
    setShowSelect(false);
    selected(copiedData);
  };

  return (
    <Fragment>
      <Input
        placeholder={placeholder}
        label={label}
        onChange={handleChange}
        value={inputValue} />

      {showSelect &&
        filterByValue(inputValue).map(
          (copiedData: object, key: number): JSX.Element => (
            <div
              className="panel"
              key={uniqueId(copiedData)}
              onClick={() => handleClick(copiedData)}
              role="button"
              data-testid={`option-${key + 1}`}
            >
              {copiedData[keyValue]}
            </div>
          )
        )}
    </Fragment>
  );
};
Autocomplete.defaultProps = {
  label: "",
  placeholder: "Search",
  selected: (): void => {
    return;
  }
};
export default WithUtils(Autocomplete);
