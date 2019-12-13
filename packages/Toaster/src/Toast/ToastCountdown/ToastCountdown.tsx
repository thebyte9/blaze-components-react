import React from "react";

const ToastCountdown = ({
  autoDismissTimeout,
  opacity,
  isRunning,
  ...props
}: any) => (
  <div
    className="react-toast-notifications__toast__countdown_animation"
    style={{
      animationDuration: `${autoDismissTimeout}ms`,
      animationPlayState: isRunning ? "running" : "paused",
      opacity
    }}
    {...props}
  />
);

export default ToastCountdown;
