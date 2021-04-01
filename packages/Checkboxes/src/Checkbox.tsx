import buildClassNames from '../../Utils/src/buildClassNames';
import React, { useState } from "react";
import Label from "./Label";
import { v4 as uuidv4 } from 'uuid';

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
  ...attrs
}: any) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
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

  const checkboxClassName = buildClassNames("form-field form-field--checkbox", {
    required,
  });

  const labelClassName = buildClassNames({ "form-field--checkbox-full": full }, {});

  const defaultId = id || uuidv4();
  const inputId = `${defaultId}-checkbox`;
  const wrapperId = `${defaultId}-wrapper`;

  return (
    <div key={wrapperId} className={checkboxClassName} role="button">
      <input
        data-testid={attrs.testId}
        readOnly
        type="checkbox"
        className="form-checkbox"
        value={value}
        disabled={disabled}
        checked={checked}
        required={required}
        id={inputId}
        name={name}
        onClick={handleCheckboxChange}
        data-cy={attrs["data-cy"]}
      />
      <div onClick={handleCheckboxChange} className={labelClassName}>
        <Label defaultId={inputId} label={label} />
      </div>
    </div>
  );
};

export default Checkbox;
