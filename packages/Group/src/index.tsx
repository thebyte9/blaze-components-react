import { useTheme } from "@blaze-react/core"
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
  children,
  ...attrs
}): JSX.Element => {
  const themeClasses = useTheme("group");
  const requiredClassName: string = buildClassNames(themeClasses);

  return (
    <div
      className={requiredClassName}
    >
      <label htmlFor={attrs.id} className={requiredClassName}>
        {label}
      </label>
      {children}
    </div>
  );
};

Group.defaultProps = {
  label: "",
  modifier: "",
  type: "text",
};

export default Group;
