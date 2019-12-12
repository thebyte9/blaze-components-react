import React, { useEffect, useRef, useState } from "react";
import { gutter } from "./common";
import toastStates from "./utils/transitions";

const ToastElement = ({
  appearance,
  placement,
  transitionDuration,
  transitionState,
  ...props
}: any) => {
  const [height, setHeight] = useState<number | string>("auto");
  const elementRef: any = useRef(null);

  useEffect(() => {
    if (transitionState === "entered") {
      const el = elementRef.current;
      setHeight(el.offsetHeight + gutter);
    }
    if (transitionState === "exiting") {
      setHeight(0);
    }
  }, [transitionState]);

  return (
    <div
      ref={elementRef}
      style={{
        height,
        transition: `height ${transitionDuration - 100}ms 100ms`
      }}
    >
      <div
        className={`react-toast-notifications__toast react-toast-notifications__toast--${appearance}`}
        style={{
          transition: `transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1), opacity ${transitionDuration}ms`,
          ...toastStates(placement)[transitionState]
        }}
        {...props}
      />
    </div>
  );
};

export default ToastElement;
