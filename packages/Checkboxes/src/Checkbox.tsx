import React, { useState } from 'react';

import Label from './Label';
import { buildClassNames } from '@blaze-react/utils';
import { nanoid } from 'nanoid';

const Checkbox = ({ checked, value, disabled, required, label, show, name, id, onChange, full, ...attrs }: any) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event: React.MouseEvent<HTMLDivElement>): void => {
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
        readOnly
        type="checkbox"
        className="form-checkbox"
        value={value}
        disabled={disabled}
        checked={checked}
        required={required}
        id={inputId}
        data-testid={inputId}
        name={name}
        onClick={handleCheckboxChange}
        {...attrs}
      />
      <div onClick={handleCheckboxChange} className={labelClassName}>
        <Label defaultId={inputId} label={label} />
      </div>
    </div>
  );
};

export default Checkbox;
