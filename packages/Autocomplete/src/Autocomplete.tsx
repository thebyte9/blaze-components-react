import React, { Fragment, useState } from 'react';
import Input from '@blaze-react/input';
import Tooltip from '@blaze-react/tooltip'

interface IAutocompleteProps {
  data: {
    keyValue: string;
    filterBy: string[];
    data: Record<string, unknown>[];
  };
  onChange: (value: string) => void;
  selected?: (...args: unknown[]) => unknown;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  inputProps?: unknown;
  tooltip?: string | JSX.Element;
}

const Autocomplete: React.SFC<IAutocompleteProps> = ({
  data: { data, filterBy: keys, keyValue },
  disabled,
  label,
  placeholder,
  selected,
  onChange,
  inputProps,
  tooltip,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const handleChange = ({ value }: { value: string }): void => {
    setShowSelect(true);
    onChange && onChange(value);
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
      <div className="autocomplete-container">
        <Tooltip tooltipContent={tooltip} position="top">
        </Tooltip>
        <Input
          {...inputProps}
          placeholder={placeholder}
          label={label}
          onChange={handleChange}
          value={inputValue}
          disabled={disabled}
        />
      </div>

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
  tooltip: null,
};

export default Autocomplete;
