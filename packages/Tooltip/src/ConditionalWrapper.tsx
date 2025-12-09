import React, { useRef, ReactNode, FC } from "react";
import { useClickAway } from "./hooks";

interface ConditionalWrapperProps {
  initialWrapper: (children: ReactNode) => JSX.Element;
  condition: boolean;
  wrapper: (children: ReactNode) => JSX.Element;
  children: ReactNode;
}

export const ConditionalWrapper: FC<ConditionalWrapperProps> = ({ initialWrapper, condition, wrapper, children }) => 
  condition ? wrapper(children) : initialWrapper(children);

interface ClickAwayWrapperProps {
  children: ReactNode;
  onClickAwayCallback: (event: MouseEvent) => void;
  className?: string;
}

const ClickAwayWrapper: FC<ClickAwayWrapperProps> = ({ children, onClickAwayCallback, className }) => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  useClickAway(wrapperRef, onClickAwayCallback);

  return (
    <span className={className} ref={wrapperRef}>
      {children}
    </span>
  );
};

export default ClickAwayWrapper;
