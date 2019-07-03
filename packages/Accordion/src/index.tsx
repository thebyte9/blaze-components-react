import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionContentDetails from "./AccordionContent/AccordionContentDetails";
import AccordionContentFooter from "./AccordionContent/AccordionContentFooter";
import AccordionHeader from "./AccordionHeader";

interface IAccordionProps {
  children: [JSX.Element, JSX.Element];
}

const Accordion = ({ children }: IAccordionProps): JSX.Element => {
  const [accordionStatus, setAccordionStatus] = useState<string>('none');

  const [header, content]: [JSX.Element, JSX.Element] = children;

  const isActive = accordionStatus === 'flex'
  const toggleAccordion = (): void => setAccordionStatus(isActive ? 'none' : 'flex');

  return (
    <div className="accordion">
      <div className="accordion__header">
        {header}
        <div className="icon-button icon-button--accordion" onClick={toggleAccordion}>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
      <div className="accordion__content-wrapper" style={{ display: accordionStatus }}>
        {content}
      </div>
    </div>
  );
};

Accordion.Content = AccordionContent;
Accordion.ContentDetails = AccordionContentDetails;
Accordion.ContentFooter = AccordionContentFooter;
Accordion.Header = AccordionHeader;
export default Accordion;
