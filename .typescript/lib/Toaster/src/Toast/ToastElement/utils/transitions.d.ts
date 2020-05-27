import { Placement } from "../../types/common";
declare const toastStates: (placement: Placement) => {
    entered: {
        transform: string;
    };
    entering: {
        transform: any;
    };
    exited: {
        transform: string;
        opacity: number;
    };
    exiting: {
        transform: string;
        opacity: number;
    };
};
export default toastStates;
