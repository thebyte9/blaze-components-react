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
  const defaultId = uniqueId(name);

  const checkboxClassName = classNames("form-field form-field--checkbox", {
    "form-field--checkbox-full": full,
    required,
  });

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

  return (
    <div
      data-testid={attrs.testId}
      data-cy={attrs["data-cy"]}
      key={id}
      className={checkboxClassName}
      onClick={handleCheckboxChange}
      role="button"
    >
      <input
        readOnly
        type="checkbox"
        className="form-checkbox"
        value={value}
        disabled={disabled}
        checked={checked}
        required={required}
        id={id || defaultId}
        name={name}
      />
      <Label defaultId={id || defaultId} label={label} />
    </div>
  );
};

export default withUtils(Checkbox);
