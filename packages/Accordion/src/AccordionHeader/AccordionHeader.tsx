import React from "react";

interface IAccordionHeaderProps {
  children: JSX.Element | JSX.Element[];
}

const AccordionHeader = ({
  children
}: IAccordionHeaderProps): JSX.Element => <div className="accordion__header-text">{children}</div>;

export default AccordionHeader;
