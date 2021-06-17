import React from "react";
import { PLACEMENTS } from "../constants";
import { IToastContainerProps } from "../types/container/container";

const ToastContainer = ({
  hasToasts,
  placement,
  ...props
}: IToastContainerProps) => (
  <div
    className="react-toast-notifications__container"
    style={{
      pointerEvents: hasToasts ? undefined : "none",
      ...PLACEMENTS[placement]
    }}
    {...props}
  />
);

export default ToastContainer;
