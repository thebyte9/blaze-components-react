/// <reference types="react" />
import { NOOP } from "../utils";
declare type AppearanceTypes = "error" | "info" | "success" | "warning";
declare type Id = string;
declare type Callback = (id: Id) => void;
interface IOptions {
    appearance?: AppearanceTypes;
    autoDismiss?: boolean;
    onDismiss?: Callback;
    id?: any;
}
declare type AddFn = (content: JSX.Element, options?: IOptions) => Id;
declare type UpdateFn = (id: Id, options: IOptions) => void;
declare type RemoveFn = (id: Id) => void;
declare type HoverFn = () => void;
declare type Placement = "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right";
declare type ToastType = IOptions & {
    appearance: AppearanceTypes;
    content: JSX.Element;
    id: Id;
};
declare type ToastsType = ToastType[];
interface IToastProps {
    appearance: AppearanceTypes;
    autoDismiss: boolean;
    autoDismissTimeout: number;
    children: any;
    isRunning: boolean;
    onDismiss: typeof NOOP;
    onMouseEnter: HoverFn;
    onMouseLeave: HoverFn;
    placement: Placement;
    transitionDuration: number;
    transitionState: TransitionState;
}
declare type TransitionState = "entering" | "entered" | "exiting" | "exited";
export { IToastProps, AppearanceTypes, TransitionState, Id, Callback, IOptions, AddFn, UpdateFn, RemoveFn, HoverFn, ToastsType, Placement };
