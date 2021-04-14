import React, { Fragment, useState } from 'react';

import Input from '../../Input/src';
import { v4 as uuidv4 } from 'uuid';

interface IAutocompleteProps {
  data: {
    keyValue: string;
    filterBy: string[];
    data: Record<string, unknown>[];
  };
  selected?: (...args: any[]) => any;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  inputProps?: any;
}

const Autocomplete: React.SFC<IAutocompleteProps> = ({
  data: { data, filterBy: keys, keyValue },
  disabled,
  label,
  placeholder,
  selected,
  inputProps,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const handleChange = ({ value }: { value: string }): void => {
    setShowSelect(true);
    setInputValue(value);
    filterByValue(value);
  };

  const filterByValue = (value: string): any[] =>
    data.filter((copy: any) => !!keys.some((key) => copy[key].toLowerCase().includes(value.toLowerCase())));

  const handleClick = (copiedData: any): void => {
    setInputValue(copiedData[keyValue]);
    setShowSelect(false);
    selected && selected(copiedData);
  };

  return (
    <Fragment>
      <Input
        {...inputProps}
        placeholder={placeholder}
        label={label}
        onChange={handleChange}
        value={inputValue}
        disabled={disabled}
      />

      {showSelect &&
        filterByValue(inputValue).map(
          (copiedData: any, key: number): JSX.Element => (
            <div
              className="panel"
              key={`panel-${key}`}
              onClick={() => handleClick(copiedData)}
              role="button"
              data-testid={`option-${key}`}
            >
              {copiedData[keyValue]}
            </div>
          ),
        )}
    </Fragment>
  );
};

Autocomplete.defaultProps = {
  disabled: false,
  label: '',
  placeholder: 'Search',
  selected: (): void => {
    return;
  },
};

export default Autocomplete;
