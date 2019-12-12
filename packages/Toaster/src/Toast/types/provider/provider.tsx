import { ComponentType } from "react";
import { IToastContainerProps } from "../container/container";

import {
  AddFn,
  IToastProps,
  Placement,
  RemoveFn,
  ToastsType,
  UpdateFn
} from "../common";

interface IComponents {
  Toast: ComponentType<IToastProps>;
  ToastContainer: ComponentType<IToastContainerProps>;
}

interface IProps {
  autoDismiss?: boolean;
  autoDismissTimeout: number;
  children: JSX.Element;
  components: IComponents;
  placement: Placement;
  transitionDuration: number;
}

interface IState {
  toasts: ToastsType;
}

interface IContext {
  add: AddFn;
  remove: RemoveFn;
  removeAll: () => void;
  update: UpdateFn;
  toasts: object[];
}

export { IComponents, IProps, IState, IContext };
