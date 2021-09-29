import { ButtonView } from '@blaze-react/button';
import { buildClassNames } from '@blaze-react/utils';
import React, { Fragment } from 'react';
interface IMoreAvatarProps {
  handleToggle: (...args: any[]) => any;
  label?: string;
  isHeader?: boolean;
  isMoreMenu?: boolean;
  className?: string;
  children?: any;
  toggled?: boolean;
  displayBg?: boolean;
  disabled?: boolean;
}
const MoreAvatar: React.SFC<IMoreAvatarProps> = ({
  children,
  handleToggle,
  label,
  isHeader,
  className,
  isMoreMenu,
  disabled,
  ...props
}) => {
  const buttonClassName = buildClassNames({
    'button--disabled': disabled,
    dropdown__button: isHeader,
    'icon-button icon-button--round': isMoreMenu,
    [className as string]: Boolean(className),
  });

  return (
    <ButtonView onClick={handleToggle} className={buttonClassName} {...props} data-testid="more-avatar-button">
      {isHeader ? (
        <Fragment>
          <span className="dropdown__name">{label}</span>
          {children}
        </Fragment>
      ) : (
        <Fragment>{React.Children.map(children, (child: any) => React.cloneElement(child))}</Fragment>
      )}
    </ButtonView>
  );
};

MoreAvatar.defaultProps = {
  children: null,
  className: '',
  isHeader: false,
  isMoreMenu: false,
  label: '',
  toggled: false,
};

export default MoreAvatar;
