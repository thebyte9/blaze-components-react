import withUtils from "@blaze-react/utils";
import React, { Fragment, FunctionComponent } from "react";

interface IBadgeProps {
  type?: string;
  link?: boolean;
  icon?: boolean;
  color?: string;
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
  color: "",
  icon: false,
  link: false
};
export default withUtils(Badge);
