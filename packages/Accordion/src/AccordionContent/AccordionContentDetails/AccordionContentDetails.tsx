import React, { Fragment } from "react";
interface IAccordionContentFooterProps {
  toggled?: boolean;
}
const AccordionContentDetails: React.SFC<IAccordionContentFooterProps> = ({
  children
}) => {
  return (
    <Fragment>
      {children && <div className="accordion__content">{children}</div>}
    </Fragment>
  );
};

export default AccordionContentDetails;
