import React from "react";
import ToastContext from "../ToastContext/ToastContext";
import { IContext } from "../types/provider/provider";

const ToastConsumer = ({
  children
}: {
  children: (context: IContext) => JSX.Element;
}) => (
  <ToastContext.Consumer>
    {(context: any) => children(context)}
  </ToastContext.Consumer>
);

export default ToastConsumer;
