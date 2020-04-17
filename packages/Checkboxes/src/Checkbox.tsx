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
  utils: { uniqueId, classNames },
  ...attrs
}: any) => {
  const [isChecked, setIsChecked] = useState(checked)
  const defaultId = uniqueId(name);

  const checkboxClassName = classNames("form-field form-field--checkbox", {
    required
  });

  const handleCheckboxChange = (event: React.MouseEvent<HTMLDivElement>): void => {
    onChange({
      event,
      value: { checked: !isChecked, value, disabled, required, label, show, name, id }
    })
    setIsChecked(!isChecked)
  }

  return (
    <div
      data-testid={attrs.testId}
      data-cy={attrs['data-cy']}
      key={id}
      id={defaultId}
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
        {...attrs}
      />
      <Label defaultId={defaultId} label={label} />
    </div>
  );
};

export default withUtils(Checkbox);