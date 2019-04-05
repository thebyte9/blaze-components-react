import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({
  children,
  type,
  pill,
  icon,
  round,
  to,
  link,
  ...attrs
}) => {
  const assignType = type ? `badge--${type}` : '';
  const isPill = pill ? 'badge--pill' : '';
  const isRound = round ? 'badge--round' : '';
  const withIcon = icon ? 'badge--icon-text' : '';
  const classes = `badge ${assignType} ${isRound} ${isPill} ${withIcon}`;

  return (link ? (
    <a href={to} className={classes} {...attrs}>{children}</a>
  ) : (
    <span className={classes} {...attrs}>
      {children}
    </span>
  ));
};

Badge.propTypes = {
  round: PropTypes.bool,
  link: PropTypes.bool,
  pill: PropTypes.bool,
  icon: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Badge.defaultProps = {
  type: '',
  round: false,
  pill: false,
  link: false,
  icon: false,
  to: '#',
  children: 'No content'
};

export default Badge;
