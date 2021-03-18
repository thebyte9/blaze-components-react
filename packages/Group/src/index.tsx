import { buildClassNames } from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useState } from "react";

interface IInputProps {
  id?: string;
  label?: string;
  modifier?: string;
  required?: boolean;
  type?: string;
  children?: JSX.Element | string;
}

const Group: FunctionComponent<IInputProps> = ({
  label,
  modifier,
  required,
  ...attrs
}): JSX.Element => {
  const requiredClassName: string = buildClassNames({ required });

  const modifierClassName: string = buildClassNames({
    [`form-field--${modifier}`]: !!modifier,
  });

  return (
    <div
      className={`form-field form-field--input ${modifierClassName}`}
    >
      <label htmlFor={attrs.id} className={requiredClassName}>
        {label}
      </label>
      <input
        data-testid="input"
        required={required}
        {...attrs}
      />
    </div>
  );
};

Group.defaultProps = {
  label: "",
  modifier: "",
  required: false,
  type: "text",
};

export default Group;
