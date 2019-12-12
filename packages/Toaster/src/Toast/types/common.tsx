import { NOOP } from "../utils";

type AppearanceTypes = "error" | "info" | "success" | "warning";
type Id = string;
type Callback = (id: Id) => void;
interface IOptions {
  appearance?: AppearanceTypes;
  autoDismiss?: boolean;
  onDismiss?: Callback;
  id?: any;
}

type AddFn = (content: JSX.Element, options?: IOptions) => Id;
type UpdateFn = (id: Id, options: IOptions) => void;
type RemoveFn = (id: Id) => void;

type HoverFn = () => void;

type Placement =
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "top-left"
  | "top-center"
  | "top-right";

type ToastType = IOptions & {
  appearance: AppearanceTypes;
  content: JSX.Element;
  id: Id;
};
type ToastsType = ToastType[];

interface IToastProps {
  appearance: AppearanceTypes;
  autoDismiss: boolean;
  autoDismissTimeout: number;
  children: Node;
  isRunning: boolean;
  onDismiss: typeof NOOP;
  onMouseEnter: HoverFn;
  onMouseLeave: HoverFn;
  placement: Placement;
  transitionDuration: number;
  transitionState: TransitionState;
}

type TransitionState = "entering" | "entered" | "exiting" | "exited";

export {
  IToastProps,
  AppearanceTypes,
  TransitionState,
  Id,
  Callback,
  IOptions,
  AddFn,
  UpdateFn,
  RemoveFn,
  HoverFn,
  ToastsType,
  Placement
};
