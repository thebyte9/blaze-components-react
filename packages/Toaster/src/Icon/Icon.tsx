import React from "react";
import { appearances } from "../appearances";
import ToastCountdown from "../ToastCountdown";

const Icon = ({
  appearance = "success",
  autoDismiss,
  autoDismissTimeout,
  isRunning
}: any) => {
  const { fg, bg, icon: Glyph } = appearances[appearance];

  return (
    <div
      className="react-toast-notifications__toast__icon-wrapper"
      style={{
        backgroundColor: fg,
        color: bg
      }}
    >
      <ToastCountdown
        opacity={autoDismiss ? 1 : 0}
        autoDismissTimeout={autoDismissTimeout}
        isRunning={isRunning}
      />
      <Glyph className="react-toast-notifications__toast__icon" />
    </div>
  );
};
export default Icon;
