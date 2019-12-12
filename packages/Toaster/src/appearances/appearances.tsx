import { AlertIcon, CheckIcon, FlameIcon, InfoIcon } from "../Icons";

const appearances = {
  error: {
    bg: "#FFEBE6",
    fg: "#FF5630",
    icon: FlameIcon,
    text: "#BF2600"
  },
  info: {
    bg: "#FFFFFF",
    fg: "#2684FF",
    icon: InfoIcon,
    text: "#505F79"
  },
  success: {
    bg: "#E3FCEF",
    fg: "#36B37E",
    icon: CheckIcon,
    text: "#006644"
  },
  warning: {
    bg: "#FFFAE6",
    fg: "#FFAB00",
    icon: AlertIcon,
    text: "#FF8B00"
  }
};

export { appearances };
