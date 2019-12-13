import React from "react";
import { PLACEMENTS } from "../constants";
import { IToastContainerProps } from "../types/container/container";

const ToastContainer = ({
  hasToasts,
  placement,
  ...props
}: IToastContainerProps | any) => (
  <div
    className="react-toast-notifications__container"
    style={{
      pointerEvents: hasToasts ? null : "none",
      ...PLACEMENTS[placement]
    }}
    {...props}
  />
);

export default ToastContainer;
