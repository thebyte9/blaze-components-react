import React, { Fragment } from "react";
import Toast from "../Toast";
import { IMessage } from "../types";

const ToastList = ({
  toastList,
  closeToast
}: {
  toastList: Array<{ id: string; message: string }>;
  closeToast: (id: string) => void;
}) => {
  return (
    <Fragment>
      {toastList.map(
        ({ id, message }: IMessage): JSX.Element => (
          <Toast key={id} id={id} toastBody={message} closeToast={closeToast} />
        )
      )}
    </Fragment>
  );
};

export default ToastList;
