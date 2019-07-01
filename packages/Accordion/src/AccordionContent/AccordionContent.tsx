import React from "react";
interface IAccordionContentProps {
  toggled?: boolean;
}
const AccordionContent: React.SFC<IAccordionContentProps> = ({
  children
}) => {
  return (
    <div className="accordion__content-wrapper" id="item-3">
      {children}
    </div>
  );
};

export default AccordionContent;
