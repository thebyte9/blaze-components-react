import Button from "@blaze-react/button";
import React, { Fragment, FunctionComponent, useState } from "react";
interface IAlertProps {
  icon?: string;
  type?: string;
  close?: boolean;
  children?: JSX.Element | string | {} | [];
}

const Alert: FunctionComponent<IAlertProps> = ({
  children,
  close,
  icon,
  type,
  ...attrs
}): JSX.Element => {
  const [offModal, setModalOff] = useState(false);
  const assignType = type && `alert--${type}`;
  const isDismissable = close && "alert--dismissable";
  const withIcon = icon && "alert--icon";
  const renderAlert = (
    <div
      className={`alert ${assignType} ${isDismissable} ${withIcon}`}
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
export default Alert;
