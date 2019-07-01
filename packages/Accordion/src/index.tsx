import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionContentDetails from "./AccordionContent/AccordionContentDetails";
import AccordionContentFooter from "./AccordionContent/AccordionContentFooter";
import AccordionExpansion from "./AccordionExpansion";
import AccordionHeader from "./AccordionHeader"
  ;

interface IAccordionProps {
  children?: any;
}

const Accordion = ({ children }: IAccordionProps) => {

  return (
    <div className="accordion">
      {children}
    </div>
  );
};

Accordion.Expansion = AccordionExpansion;
Accordion.Content = AccordionContent;
Accordion.ContentDetails = AccordionContentDetails;
Accordion.ContentFooter = AccordionContentFooter;
Accordion.Header = AccordionHeader;
export default Accordion;
