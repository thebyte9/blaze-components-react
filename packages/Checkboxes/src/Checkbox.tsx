import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (disabled) {
      return;
    }

    const newChecked = event.target.checked;
    setIsChecked(newChecked);

    onChange({
      event,
      value: {
        checked: newChecked,
        disabled,
        id,
        label,
        name,
        required,
        show,
        value,
      },
    });
  };

  const handleLabelClick = (event: React.MouseEvent<HTMLLabelElement>): void => {
    if (disabled) {
      return;
    }

    const newChecked = !isChecked;
    setIsChecked(newChecked);

    onChange({
      event,
      value: {
        checked: newChecked,
        disabled,
        id,
        label,
        name,
        required,
        show,
        value,
      },
    });
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
        checked={isChecked}
        required={required}
        id={inputId}
        data-testid={inputId}
        name={name}
        onChange={handleInputChange}
        {...attrs}
      />
      <div className={labelClassName} data-testid="form-field-wrapper">
        <Label defaultId={inputId} label={label} onClick={handleLabelClick} />
        <Tooltip {...tooltip} />
      </div>
    </div>
  );
};

export default Checkbox;
