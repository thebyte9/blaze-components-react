import React from "react";
interface IAccordionHeaderProps {
  children: JSX.Element | JSX.Element[];
}
const AccordionHeader = ({ children }: IAccordionHeaderProps) => (
  <div className="accordion__header-text">
    {children}
  </div>);

export default AccordionHeader;
