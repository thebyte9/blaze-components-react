import { FunctionComponent } from "react";
interface IAlertProps {
    icon?: string;
    type?: string;
    close?: boolean;
    children?: JSX.Element | string | {} | [];
}
declare const Alert: FunctionComponent<IAlertProps>;
export default Alert;
