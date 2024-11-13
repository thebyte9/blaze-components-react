import React, { ReactNode } from "react";
import Tooltip from './Tooltip';

interface TooltipProps {
  tooltipContent?: JSX.Element | string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  isParentFixed?: boolean;
  customPosition?: React.CSSProperties;
  isDisplayTooltipIndicator?: boolean;
  trigger?: 'hover' | 'click';
  className?: string;
  children?: ReactNode;
}

const TooltipWrapper: React.FC<TooltipProps> = (props) => {
  if (!props.tooltipContent) return null;

  return <Tooltip {...props} />;
}

export default TooltipWrapper;