import React from "react";

interface IAccordionContentProps {
  children: JSX.Element | JSX.Element[];
}

const AccordionContent = ({
  children
}: IAccordionContentProps): JSX.Element => <>{children}</>;

export default AccordionContent;
