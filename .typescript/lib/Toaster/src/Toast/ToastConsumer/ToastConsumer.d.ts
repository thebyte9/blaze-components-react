/// <reference types="react" />
import { IContext } from "../types/provider/provider";
declare const ToastConsumer: ({ children }: {
    children: (context: IContext) => JSX.Element;
}) => JSX.Element;
export default ToastConsumer;
