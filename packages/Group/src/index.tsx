import { useTheme } from "@blaze-react/core"
import { buildClassNames } from "@blaze-react/utils";
import React, { FunctionComponent} from "react";

interface IGroupProps {
  id?: string;
  label?: string;
  modifier?: string;
  children?: JSX.Element | string;
}

const Group: FunctionComponent<IGroupProps> = ({
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
};

export default Group;
