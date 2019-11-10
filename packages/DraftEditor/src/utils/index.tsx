import ReactDOM from "react-dom";

const getEditorHeight = (element: any) => {
  let editorHeight = { height: "100%" };
  try {
    if (!element) {
      return editorHeight;
    }

    const editor = ReactDOM.findDOMNode(element);

    if (editor instanceof HTMLElement) {
      const images = [...editor.querySelectorAll("img")];

      const totalImagesSizes = images.reduce((accumulator, image) => {
        const imageStyles: any = getComputedStyle(image);
        if (imageStyles.float === "left" || imageStyles.float === "right") {
          return image.clientHeight + accumulator;
        }
        return accumulator;
      }, 0);

      if (totalImagesSizes) {
        editorHeight = {
          height: `${totalImagesSizes + editor.clientHeight}px`
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
