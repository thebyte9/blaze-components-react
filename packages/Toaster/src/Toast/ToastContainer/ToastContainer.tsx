import React from "react";
import { placements } from "../constants";
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
      ...placements[placement]
    }}
    {...props}
  />
);

export default ToastContainer;
