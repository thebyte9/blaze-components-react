import withUtils from '@blaze-react/utils';
import React, { Fragment, FunctionComponent } from 'react';

interface IBadgeProps {
  type?: string;
  link?: boolean;
  icon?: boolean;
  color?: string;
  modifiers?: string;
  children?: any;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}
const Badge: FunctionComponent<IBadgeProps> = ({
  children,
  type,
  color,
  icon,
  link,
  utils: { classNames },
  modifiers,
  ...attrs
}) => {
  const withIcon = icon ? 'badge--icon-text' : '';
  const classes: string = classNames('badge', {
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
  children: 'No content',
  color: '',
  icon: false,
  link: false,
  modifiers: '',
};
export default withUtils(Badge);
