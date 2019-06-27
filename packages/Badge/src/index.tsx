import React, { FunctionComponent } from "react";
interface IBadgeProps {
  type?: string;
  to?: string;
  round?: boolean;
  link?: boolean;
  pill?: boolean;
  icon?: boolean;
  children?: string | JSX.Element;
}
const Badge: FunctionComponent<IBadgeProps> = ({
  children,
  type,
  pill,
  icon,
  round,
  to,
  link,
  ...attrs
}) => {
  const assignType = type ? `badge--${type}` : "";
  const isPill = pill ? "badge--pill" : "";
  const isRound = round ? "badge--round" : "";
  const withIcon = icon ? "badge--icon-text" : "";
  const classes = `badge ${assignType} ${isRound} ${isPill} ${withIcon}`;
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
  pill: false,
  round: false,
  to: "#",
  type: ""
};
export default Badge;
