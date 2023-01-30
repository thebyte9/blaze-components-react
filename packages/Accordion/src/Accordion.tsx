import React, { useEffect, useState } from 'react';
import AccordionContent from './AccordionContent';
import AccordionContentDetails from './AccordionContent/AccordionContentDetails';
import AccordionContentFooter from './AccordionContent/AccordionContentFooter';
import AccordionHeader from './AccordionHeader';
import { DOWN, FLEX, NONE, UP } from './constants';

interface IAccordionProps {
  children: [JSX.Element, JSX.Element];
  onOpen?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
}

const Accordion = ({ children, isOpen, onOpen, onClose }: IAccordionProps): JSX.Element => {
  const [accordionStatus, setAccordionStatus] = useState<string>(isOpen ? FLEX : NONE);

  const [header, content]: [JSX.Element, JSX.Element] = children;

  useEffect(() => {
    setAccordionStatus(isOpen ? FLEX : NONE);
  }, [isOpen]);

  const isActive: boolean = accordionStatus === FLEX;
  const toggleAccordion = (): void => {
    const status = isActive ? NONE : FLEX;
    setAccordionStatus(status);
    status === FLEX && onOpen();
    status === NONE && onClose();
  };

  const arrowType = isActive ? UP : DOWN;

  return (
    <div className="accordion">
      <div className="accordion__header">
        {header}
        <div className="icon-button icon-button--accordion" data-testid="toggle-accordion" onClick={toggleAccordion}>
          <i className="material-icons">{`keyboard_arrow_${arrowType}`}</i>
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

Accordion.defaultProps = {
  onOpen: () => ({}),
  onClose: () => ({}),
};

export default Accordion;
