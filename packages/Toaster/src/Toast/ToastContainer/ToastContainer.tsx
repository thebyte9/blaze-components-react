import React from "react";
import { IToastContainerProps } from "../types/container/container";

const placements = {
  "bottom-center": { bottom: 0, left: "50%", transform: "translateX(-50%)" },
  "bottom-left": { bottom: 0, left: 0 },
  "bottom-right": { bottom: 0, right: 0 },
  "top-center": { top: 0, left: "50%", transform: "translateX(-50%)" },
  "top-left": { top: 0, left: 0 },
  "top-right": { top: 0, right: 0 }
};

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
