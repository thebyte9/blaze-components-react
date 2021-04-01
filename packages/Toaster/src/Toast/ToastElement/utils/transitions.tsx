import { Placement } from "../../types/common";

interface ITranslate {
  [index: string]: string;
  bottom: string;
  left: string;
  right: string;
  top: string;
}

function getTranslate(placement: string) {
  const pos = placement.split("-");
  const relevantPlacement = pos[1] === "center" ? pos[0] : pos[1];
  const translateMap: ITranslate = {
    bottom: "translate3d(0, 120%, 0)",
    left: "translate3d(-120%, 0, 0)",
    right: "translate3d(120%, 0, 0)",
    top: "translate3d(0, -120%, 0)"
  };

  return translateMap[relevantPlacement];
}
interface IToastStates {
  [index: string]: any;
  entered: any;
  entering: any;
  exited: any;
  exiting: any;
}

const toastStates = (placement: Placement) => {
  return {
    entered: { transform: "translate3d(0,0,0)" },
    entering: { transform: getTranslate(placement) },
    exited: { transform: "scale(0.66)", opacity: 0 },
    exiting: { transform: "scale(0.66)", opacity: 0 }
  } as IToastStates
};

export default toastStates;
