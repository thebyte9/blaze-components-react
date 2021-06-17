import React from 'react';

interface IAccordionHeaderProps {
  children?: JSX.Element | JSX.Element[];
}

const AccordionHeader = ({ children }: IAccordionHeaderProps): JSX.Element | null => {
  return children ? <div className="accordion__header-text">{children}</div> : null;
};

export default AccordionHeader;
