import buildClassNames from '../../Utils/src/buildClassNames';
import React, { Fragment, FunctionComponent } from "react";

interface IBadgeProps {
  type?: string;
  link?: boolean;
  icon?: boolean;
  color?: string;
  modifiers?: string;
  children?: React.ReactNode;
}

const Badge: FunctionComponent<IBadgeProps> = ({
  children,
  type,
  color,
  icon,
  link,
  modifiers,
  ...attrs
}) => {
  const withIcon = icon ? "badge--icon-text" : "";

  const classes: string = buildClassNames("badge", {
    [`badge--${type}`]: !!type,
    [`${withIcon}`]: !!withIcon,
    [`${color}`]: !!color,
    [`${modifiers}`]: !!modifiers,
  });

  return link ? (
    <Fragment>{children}</Fragment>
  ) : (
    <span className={classes} {...attrs}>
      {children}
    </span>
  );
};

Badge.defaultProps = {
  children: "No content",
  color: "",
  icon: false,
  link: false,
  modifiers: "",
};

export default Badge;
