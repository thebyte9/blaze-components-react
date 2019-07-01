import React from "react";

const Toast = ({
  toastBody,
  closeToast,
  id
}: {
  toastBody: string;
  id: string;
  closeToast: (id: string) => void;
}) => (
  <li>
    <button onClick={() => closeToast(id)} />
    <p>{toastBody}</p>
  </li>
);

export default Toast;
