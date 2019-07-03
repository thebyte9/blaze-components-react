import React, { Fragment } from "react";

interface IAccordionContentProps {
  children: JSX.Element | JSX.Element[];
}

const AccordionContent = ({
  children
}: IAccordionContentProps): JSX.Element => <Fragment>{children}</Fragment>;

export default AccordionContent;
