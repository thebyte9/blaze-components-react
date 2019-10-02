import React, { FunctionComponent } from "react";
interface IBadgeProps {
  type?: string;
  to?: string;
  round?: boolean;
  link?: boolean;
  pill?: boolean;
  icon?: boolean;
  color?: string;
  children?: string | JSX.Element;
}
const Badge: FunctionComponent<IBadgeProps> = ({
  children,
  type,
  color,
  icon,
  to,
  link,
  ...attrs
}) => {
  const withIcon = icon ? "badge--icon-text" : "";
  const classes = `badge ${type} ${withIcon} ${color}`;
  return link ? (
    <a href={to} className={classes} {...attrs}>
      {children}
    </a>
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
  to: "#",
  color: "grey-dark",
  type: "badge--pagebuilder"
};
export default Badge;
