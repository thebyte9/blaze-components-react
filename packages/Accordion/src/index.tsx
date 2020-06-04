import React, { useEffect, useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionContentDetails from "./AccordionContent/AccordionContentDetails";
import AccordionContentFooter from "./AccordionContent/AccordionContentFooter";
import AccordionHeader from "./AccordionHeader";

interface IAccordionProps {
  children: [JSX.Element, JSX.Element];
  open?: boolean;
}

const Accordion = ({ children, open }: IAccordionProps): JSX.Element => {
  const flex = "flex";
  const none = "none";

  const [accordionStatus, setAccordionStatus] = useState<string>(
    open ? flex : none
  );

  const [header, content]: [JSX.Element, JSX.Element] = children;

  useEffect(() => {
    setAccordionStatus(open ? flex : none);
  }, [open]);

  const isActive: boolean = accordionStatus === flex;
  const toggleAccordion = (): void =>
    setAccordionStatus(isActive ? none : flex);

  return (
    <div className="accordion">
      <div className="accordion__header">
        {header}
        <div
          className="icon-button icon-button--accordion"
          onClick={toggleAccordion}
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
      <div
        className="accordion__content-wrapper"
        style={{ display: accordionStatus }}
      >
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
