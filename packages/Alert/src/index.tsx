import Button from "@blaze-react/button";
import WithUtils from "@blaze-react/utils";
import React, { Fragment, FunctionComponent, useState } from "react";
interface IAlertProps {
  icon?: string;
  type?: string;
  close?: boolean;
  utils: {
    classNames: (...args: any) => string;
  };
  children?: JSX.Element | string;
}

const Alert: FunctionComponent<IAlertProps> = ({
  children,
  close,
  icon,
  type,
  utils: { classNames },
  ...attrs
}): JSX.Element => {
  const [offModal, setModalOff] = useState<boolean>(false);

  const iconClassName: string = classNames({ "alert--icon": !!icon });
  const typeClassName: string = classNames({ [`alert--${type}`]: !!type });
  const dismissableClassName: string = classNames({
    "alert--dismissable": close
  });

  const renderAlert = (
    <div
      className={`alert ${typeClassName} ${dismissableClassName} ${iconClassName}`}
      {...attrs}
    >
      {icon && <i className="material-icons">{icon}</i>}
      {children}
      {close && (
        <Button
          onClick={() => setModalOff(true)}
          className="icon-button icon-button--close"
        >
          <i className="material-icons">close</i>
        </Button>
      )}
    </div>
  );
  return <Fragment>{!offModal && renderAlert}</Fragment>;
};
Alert.defaultProps = {
  children: "No content",
  close: false,
  icon: "",
  type: ""
};
export default WithUtils(Alert);
