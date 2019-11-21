import ReactDOM from "react-dom";
import { DEFAULT_HEIGHT, LEFT, MARGIN_IMAGE, RIGHT } from "../constants";
import eventBus from "../eventBus";

declare let window: any;

const addButtonToAlignmentToolContainer = (element: any) => {
  const [alignmentToolContainer]: any = findElements(
    element,
    ".draftJsEmojiPlugin__alignmentTool__2mkQr"
  );

  window.showModal = () => {
    const [focusedImage]: any = findElements(
      element,
      ".draftJsFocusPlugin__focused__3Mksn"
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
};

const findElements = (node: any, element: string) => {
  if (!node) {
    return [];
  }
  const editor = ReactDOM.findDOMNode(node);

  if (editor instanceof HTMLElement) {
    return Array.from(editor.querySelectorAll(element));
  }

  return [];
};

const updateElementStyles = (element: any, styles: any) => {
  const margins = ["marginTop", "marginLeft", "marginRight", "marginBottom"];

  Object.entries(styles).forEach(([key, value]) => {
    if (margins.includes(key)) {
      element.style[key] = `${value}px`;
    }
  });
};

const findImageBySrc = (images: any[], src: string, key: string = "src") =>
  images.find(({ [key]: imageSrc }: any) => imageSrc === src);

const findImageAndUpdateStyles = (element: any, imageAttributes: any) => {
  const images: any[] = findElements(element, "img");

  if (imageAttributes instanceof Array) {
    imageAttributes.forEach((imgData: any) => {
      const imageToUpdate = findImageBySrc(images, imgData.url);

      if (imageToUpdate) {
        updateElementStyles(imageToUpdate, imgData);
      }
    });
    return;
  }

  const selectedImage = findImageBySrc(images, imageAttributes.focusedImageURL);
  const selectImageAttributes = findImageBySrc(
    imageAttributes.images,
    imageAttributes.focusedImageURL,
    "url"
  );

  if (selectImageAttributes) {
    updateElementStyles(selectedImage, selectImageAttributes);
  }
};

const getEditorHeight = (element: any) => {
  let editorHeight = { height: DEFAULT_HEIGHT };
  try {
    const editor = ReactDOM.findDOMNode(element);

    if (editor instanceof HTMLElement) {
      const images: any[] = findElements(element, "img");

      const totalImagesSize = images.reduce((accumulator, image) => {
        const { float }: any = getComputedStyle(image);
        if (float === LEFT || float === RIGHT) {
          return image.clientHeight + accumulator + MARGIN_IMAGE;
        }
        return accumulator;
      }, 0);

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

export {
  getEditorHeight,
  addButtonToAlignmentToolContainer,
  findImageAndUpdateStyles
};
