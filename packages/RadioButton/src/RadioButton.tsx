import { ErrorMessage } from '@blaze-react/utils';
import React, { Fragment, FunctionComponent, useState } from 'react';

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IRadioButtonProps {
  options: any[];
  required?: boolean;
  onChange: ({
    event,
    selected,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    selected: string | Record<string, unknown> | [];
  }) => void;
  utils: {
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
  error?: boolean;
  validationMessage: string | JSX.Element;
}

const RadioButton: React.SFC<IRadioButtonProps> = ({
  onChange,
  options,
  required,
  error,
  validationMessage,
  ...attrs
}) => {
  const [selected, setSelected] = useState<{ value: string | any }>({
    value: null,
  });
  const handleSelect = ({ event, item }: { event: any; item: any }) => {
    if (item.disabled) {
      return;
    }
    setSelected(item);
    onChange({ event, selected: item });
  };
  return (
    <Fragment>
      {required && <span className="required" />}
      {options.map((item) => {
        const { value, disabled, label, id } = item;
        return (
          <div
            key={label}
            className="form-field form-field--radio"
            onClick={(event) => handleSelect({ event, item })}
            role="button"
          >
            <input
              readOnly
              type="radio"
              className="form-radio"
              value={value}
              disabled={disabled}
              checked={value === selected.value}
              id={id}
              {...attrs}
            />
            <label htmlFor={id}>{label}</label>
          </div>
        );
      })}
      {error && <ErrorMessage message={validationMessage} />}
    </Fragment>
  );
};

RadioButton.defaultProps = {
  error: false,
  onChange: (): void => {
    return;
  },
  options: [],
  required: false,
  validationMessage: 'This field is required',
};

export default RadioButton;
