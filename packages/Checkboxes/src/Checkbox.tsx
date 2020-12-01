import withUtils from "@blaze-react/utils";
import React, { useState } from "react";
import Label from "./Label";

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
  utils: { uniqueId, classNames },
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

  const checkboxClassName = classNames("form-field form-field--checkbox", {
    required,
  });

  const labelClassName = classNames({
    "form-field--checkbox-full": full,
  });

  const defaultId = id || uniqueId(name);
  const inputId = `${defaultId}-checkbox`;
  const wrapperId = `${defaultId}-wrapper`;

  return (
    <div
      key={wrapperId}
      className={checkboxClassName}
      role="button"
      id={wrapperId}
    >
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

export default withUtils(Checkbox);
