import { ComponentType } from "react";
import { IToastProps } from "../common";

type IProps = IToastProps & {
  component: ComponentType<IToastProps>;
};
interface IState {
  isRunning: boolean;
}

export { IProps, IState };
