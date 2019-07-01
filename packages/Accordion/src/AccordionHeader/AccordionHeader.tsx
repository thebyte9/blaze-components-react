import React from "react";
interface IAccordionHeaderContentProps {
  toggled?: boolean;
}
const AccordionHeader: React.SFC<IAccordionHeaderContentProps> = ({
  children
}) => {
  return (
    <div className="accordion__header">
      <div className="accordion__header-text">
        {children}
      </div>
      <div className="icon-button icon-button--accordion">
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
    </div>
  );
};

export default AccordionHeader;
