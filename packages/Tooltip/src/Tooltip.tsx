import React, { FunctionComponent } from 'react';
interface ITooltipProps {
  position?: string;
  text?: string;
  children?: any;
}
const Tooltip: FunctionComponent<ITooltipProps> = ({ children, position, text }: ITooltipProps) => (
  <div className="tooltip-here">
    {children}
    <span className={`tooltip tooltip--${position}`}>{text}</span>
  </div>
);

Tooltip.defaultProps = {
  children: 'No content',
  position: 'top',
  text: 'No content',
};
export default Tooltip;
