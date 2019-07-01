import React, { Fragment } from "react";
interface IAccordionContentFooterProps {
  toggled?: boolean;
}
const AccordionContentFooter: React.SFC<IAccordionContentFooterProps> = ({
  children
}) => {
  return (
    <Fragment>
      {children && <div className="accordion__footer">{children}</div>}
    </Fragment>
  );
};

export default AccordionContentFooter;
