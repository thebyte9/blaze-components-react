
import { DOC, IMAGE, VIDEO } from "../constants";

const getInputLabel = (input: string, type: string) => {
  switch (type) {
    case IMAGE:
      return `${IMAGE} ${input}`;
    case DOC:
      return `${DOC}ument ${input}`
    default:
      return `${VIDEO} ${input}`
  }
}

export default getInputLabel;
