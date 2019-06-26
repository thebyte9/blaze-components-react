import React from "react";
type TooltipProps = {
  position?: string,
  text?: string,
  children?: any
};
const Tooltip: React.SFC<TooltipProps> = ({ children, position, text }) => (
  <div className="tooltip-here">
    {children}
    <span className={`tooltip tooltip--${position}`}>{text}</span>
  </div>
);
Tooltip.defaultProps = {
  position: "top",
  text: "No content",
  children: "No content"
};
export default Tooltip;
