import React from "react";

interface IAccordionContentDetailsProps {
  children: JSX.Element | JSX.Element[];
}

const AccordionContentDetails = ({
  children
}: IAccordionContentDetailsProps): JSX.Element => (<div className="accordion__content">{children}</div>);


export default AccordionContentDetails;
