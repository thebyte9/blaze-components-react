import ReactDOM from "react-dom";
import { DEFAULT_HEIGHT, LEFT, MARGIN_IMAGE, RIGHT } from "../constants";
import eventBus from "../eventBus";
declare let window: any;
const addButtonToAlignmentToolContainer = (element: any) => {
  if (!element) {
    return;
  }
  const editor = ReactDOM.findDOMNode(element);
  if (editor instanceof HTMLElement) {
    const [alignmentToolContainer] = Array.from(
      editor.querySelectorAll(".draftJsEmojiPlugin__alignmentTool__2mkQr")
    );

    window.showModal = () => {
      const [focusedImage] = Array.from(
        editor.querySelectorAll(".draftJsFocusPlugin__focused__3Mksn")
      );

      eventBus.$emit("editImageAttributes", focusedImage.src);
    };

    alignmentToolContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="draftJsEmojiPlugin__buttonWrapper__1Dmqh" onclick="showModal()">
        <i class="material-icons">
          perm_data_setting
        </i>
      </div>`
    );
  }
};

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

export { getEditorHeight, addButtonToAlignmentToolContainer };
