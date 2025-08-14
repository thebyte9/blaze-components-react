import React, { useState } from 'react';
import Label from './Label';
import { buildClassNames } from '@blaze-react/utils';
import { nanoid } from 'nanoid';
import Tooltip from '@blaze-react/tooltip';

const Checkbox = ({
  checked,
  value,
  disabled,
  required,
  label,
  show,
  name,
  id,
  onChange,
  full,
  tooltip = {},
  ...attrs
}: any) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLLabelElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    if (disabled) {
      return;
    }

    onChange({
      event,
      value: {
        checked: !isChecked,
        disabled,
        id,
        label,
        name,
        required,
        show,
        value,
      },
    });
    setIsChecked(!isChecked);
  };

  const checkboxClassName = buildClassNames('form-field form-field--checkbox', {
    required,
  });

  const labelClassName = buildClassNames({ 'form-field--checkbox-full': full }, {});

  const defaultId = id || nanoid();
  const inputId = `${defaultId}-checkbox`;
  const wrapperId = `${defaultId}-wrapper`;

  return (
    <div key={wrapperId} className={checkboxClassName} role="button">
      <input
        type="checkbox"
        className="form-checkbox"
        value={value}
        disabled={disabled}
        checked={checked}
        required={required}
        id={inputId}
        data-testid={inputId}
        name={name}
        onChange={handleCheckboxChange}
        {...attrs}
      />
      <div className={labelClassName} data-testid="form-field-wrapper">
        <Label defaultId={inputId} label={label} onClick={handleCheckboxChange} />
        <Tooltip {...tooltip} />
      </div>
    </div>
  );
};

export default Checkbox;
