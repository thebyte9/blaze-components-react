import React, { Fragment, FunctionComponent } from "react";
import removeExtraSpaces from "../../Utils/src/removeExtraSpaces";

interface IBadgeProps {
  type?: string;
  link?: boolean;
  icon?: boolean;
  color?: string;
  children?: any;
}
const Badge: FunctionComponent<IBadgeProps> = ({
  children,
  type,
  color,
  icon,
  link,
  ...attrs
}) => {
  const withIcon = icon ? "badge--icon-text" : "";
  const classes = removeExtraSpaces(
    `badge ${type ? `badge--${type}` : ""} ${withIcon} ${color}`
  );
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
  icon: false,
  link: false,
  color: ""
};
export default Badge;
