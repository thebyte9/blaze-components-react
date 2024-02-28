import { buildClassNames } from '@blaze-react/utils';
import { ErrorMessage } from '@blaze-react/utils';
import React, { useEffect, useState, FunctionComponent } from 'react';

interface ISelectProps {
  label?: string;
  keys?: string[];
  options: any[];
  required?: boolean;
  onChange: ({ event, value }: { event: React.ChangeEvent<HTMLSelectElement>; value: string }) => void;
  error?: boolean;
  validationMessage?: string | JSX.Element | undefined;
  selected?: any;
  id?: string;
  disabled?: any[];
  selectDisabled?: boolean;
  defaultTextValue?: string;
  showDefaultOption?: boolean;
}

const Select: FunctionComponent<ISelectProps> = ({
  label,
  required,
  onChange,
  options,
  selected,
  keys,
  error,
  validationMessage,
  disabled,
  selectDisabled,
  defaultTextValue,
  showDefaultOption,
  ...attrs
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(selected || '');

  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    const parsedValue = value === 'Please Choose...' ? '' : value
    setSelectedOption(parsedValue);
    onChange({ event, value: parsedValue });
  };

  const requiredClassName: string = buildClassNames({
    required,
  });

  const setOption = (value: string, text?: string): JSX.Element => {
    const isDisabled = disabled && disabled.includes(value);
    return (
      <option key={value} value={value} disabled={isDisabled}>
        {text || value}
      </option>
    );
  };

  const renderOptions = () => {
    const [first]: any = options;

    if (typeof first === 'string') {
      return options.map((option) => setOption(option));
    }
    if (first instanceof Array) {
      return options.map(([value, text]) => setOption(value, text));
    }

    return options.map((option) => {
      const [value, text]: any = keys;
      return setOption(option[value], option[text]);
    });
  };

  return (
    <div className="form-field form-field--select">
      {label && (
        <label htmlFor={attrs.id} className={requiredClassName}>
          {label}
        </label>
      )}
      <select onChange={handleChange} disabled={selectDisabled || !options.length} value={selectedOption} {...attrs}>
        {(!required || showDefaultOption) && <option defaultValue="">{defaultTextValue}</option>}
        {renderOptions()}
      </select>
      {error && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

Select.defaultProps = {
  defaultTextValue: 'Please Choose...',
  disabled: [],
  selectDisabled: false,
  error: false,
  keys: [],
  label: '',
  showDefaultOption: true,
  onChange: (): void => {
    return;
  },
  options: [],
  required: false,
  selected: '',
  validationMessage: 'This field is required',
};

export default Select;
