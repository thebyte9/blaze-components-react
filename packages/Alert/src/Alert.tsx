import Button from '../../Button/src';
import React, { Fragment, FunctionComponent, useState } from "react";
import buildClassNames from '../../Utils/src/buildClassNames';

interface IAlertProps {
  icon?: string;
  type?: string;
  close?: boolean;
  children?: JSX.Element | string;
}

const Alert: FunctionComponent<IAlertProps> = ({
  children,
  close,
  icon,
  type,
  ...attrs
}): JSX.Element => {
  const [offModal, setModalOff] = useState<boolean>(false);

  const alertClassName: string = buildClassNames("alert", {
    "alert--dismissable": close,
    "alert--icon": !!icon,
    [`alert--${type}`]: !!type
  });

  const renderAlert = (
    <div className={alertClassName} {...attrs}>
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

export default Alert;