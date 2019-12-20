import React from "react";
import { AlertIcon, CheckIcon, FlameIcon, InfoIcon } from "../Icons";
import ToastCountdown from "../Toast/ToastCountdown";

const iconsByAppearance = {
  error: FlameIcon,
  info: InfoIcon,
  success: CheckIcon,
  warning: AlertIcon
};

const Icon = ({
  appearance,
  autoDismiss,
  autoDismissTimeout,
  isRunning
}: any) => {
  const Glyph = iconsByAppearance[appearance];

  return (
    <div
      className={`react-toast-notifications__toast__icon-wrapper react-toast-notifications__toast__icon-wrapper--${appearance}`}
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
