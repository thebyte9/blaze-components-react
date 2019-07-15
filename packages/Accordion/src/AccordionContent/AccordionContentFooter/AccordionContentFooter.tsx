import React from "react";

interface IAccordionContentFooterProps {
  children: JSX.Element | JSX.Element[];
}

const AccordionContentFooter = ({
  children
}: IAccordionContentFooterProps): JSX.Element => <div className="accordion__footer">{children}</div>;

export default AccordionContentFooter;
