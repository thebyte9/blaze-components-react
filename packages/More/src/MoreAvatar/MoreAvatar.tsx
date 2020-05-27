import Button from "@blaze-react/button";
import classnames from "classnames";
import React, { Fragment } from "react";
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
  toggled,
  displayBg,
  disabled,
  ...props
}) => {
  const buttonClassName = classnames({
    "button--disabled": disabled,
    "icon-button icon-button--round": isMoreMenu,
    [className as string]: Boolean(className),
    dropdown__button: isHeader,
  });

  return (
    <Button onClick={handleToggle} className={buttonClassName} {...props}>
      {isHeader ? (
        <Fragment>
          <span className="dropdown__name">{label}</span>
          {children}
        </Fragment>
      ) : (
        <Fragment>
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child)
          )}
        </Fragment>
      )}
    </Button>
  );
};
MoreAvatar.defaultProps = {
  children: null,
  className: "",
  isHeader: false,
  isMoreMenu: false,
  label: "",
};
export default MoreAvatar;
