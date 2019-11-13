import ReactDOM from "react-dom";
import { DEFAULT_HEIGHT, LEFT, MARGIN_IMAGE, RIGHT } from "../constants";

const getEditorHeight = (element: any) => {
  let editorHeight = { height: DEFAULT_HEIGHT };
  try {
    if (!element) {
      return editorHeight;
    }

    const editor = ReactDOM.findDOMNode(element);

    if (editor instanceof HTMLElement) {
      const images: NodeListOf<Element> = editor.querySelectorAll("img");

      const totalImagesSize = Array.from(images).reduce(
        (accumulator, image) => {
          const { float }: any = getComputedStyle(image);
          if (float === LEFT || float === RIGHT) {
            return image.clientHeight + accumulator + MARGIN_IMAGE;
          }
          return accumulator;
        },
        0
      );

      if (totalImagesSize) {
        editorHeight = {
          height: `${totalImagesSize + editor.clientHeight}px`
        };
      }
    }
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(error);
  }
  return editorHeight;
};

export { getEditorHeight };
