import React, { Fragment, useState } from 'react';

import Input from '@blaze-react/input';
interface IAutocompleteProps {
  data: {
    keyValue: string;
    filterBy: string[];
    data: Record<string, unknown>[];
  };
  selected?: (...args: unknown[]) => unknown;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  inputProps?: unknown;
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

  const filterByValue = (value: string): unknown[] =>
    data.filter((copy: unknown) => !!keys.some((key) => copy[key].toLowerCase().includes(value.toLowerCase())));

  const handleClick = (copiedData: unknown): void => {
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
          (copiedData: unknown, key: number): JSX.Element => (
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
