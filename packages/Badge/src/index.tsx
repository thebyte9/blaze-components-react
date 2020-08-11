import withUtils from "@blaze-react/utils";
import React, { Fragment, FunctionComponent } from "react";

interface IBadgeProps {
  type?: string;
  link?: boolean;
  icon?: boolean;
  color?: string;
  modifiers?: string;
  children?: any;
  utils: {
    removeExtraSpaces: (...args: any) => string;
  };
}
const Badge: FunctionComponent<IBadgeProps> = ({
  children,
  type,
  color,
  icon,
  link,
  utils: { removeExtraSpaces },
  modifiers,
  ...attrs
}) => {
  const withIcon = icon ? "badge--icon-text" : "";
  const classes = removeExtraSpaces(
    `badge ${type ? `badge--${type}` : ""} ${withIcon} ${color} ${modifiers}`
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
  color: "",
  icon: false,
  link: false,
  modifiers: "",
};
export default withUtils(Badge);
