import React from "react";
import ToastConsumer from "../ToastConsumer/ToastConsumer";

const withToastManager = (Comp: any) =>
  React.forwardRef((props: any, ref: any) => (
    <ToastConsumer>
      {(context: any) => <Comp toastManager={context} {...props} ref={ref} />}
    </ToastConsumer>
  ));

export default withToastManager;
