import { Placement } from "../../types/common";

function getTranslate(placement: string) {
  const pos = placement.split("-");
  const relevantPlacement = pos[1] === "center" ? pos[0] : pos[1];
  const translateMap = {
    bottom: "translate3d(0, 120%, 0)",
    left: "translate3d(-120%, 0, 0)",
    right: "translate3d(120%, 0, 0)",
    top: "translate3d(0, -120%, 0)"
  };

  return translateMap[relevantPlacement];
}

const toastStates = (placement: Placement) => ({
  entered: { transform: "translate3d(0,0,0)" },
  entering: { transform: getTranslate(placement) },
  exited: { transform: "scale(0.66)", opacity: 0 },
  exiting: { transform: "scale(0.66)", opacity: 0 }
});

export default toastStates;
