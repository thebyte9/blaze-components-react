import React, { Fragment, FunctionComponent } from "react";

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
  const classType = `${`badge ${type ? `badge--${type}` : ""}`.trim()}`;
  const classes = `${`${classType} ${withIcon}`.trim()} ${color}`.trim();
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
  link: false
};
export default Badge;
