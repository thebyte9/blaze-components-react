import { ErrorMessage } from '@blaze-react/utils';
import React, { Fragment, FunctionComponent, useState } from 'react';
import Tooltip from '@blaze-react/tooltip'

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IOption {
  value: string;
  disabled: boolean;
  label: string;
  id: string;
  tooltip?: string | JSX.Element; // Tooltip prop
}

interface IRadioButtonProps {
  options: IOption[];
  required?: boolean;
  onChange: ({
    event,
    selected,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    selected: string | Record<string, unknown> | [];
  }) => void;
  error?: boolean;
  validationMessage: string | JSX.Element;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
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

  const handleSelect = ({ event, item }: { event: any; item: IOption }) => {
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
        const { value, disabled, label, id, tooltip } = item;
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
            <label htmlFor={id} className="radio-label">
              {label}
              {tooltip && (
                <span className="tooltip">{tooltip}</span>
              )}
            </label>
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
