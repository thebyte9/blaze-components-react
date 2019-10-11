import React, { FunctionComponent } from "react";
import { IImage, IPreviewIages } from "../interfaces";

const PreviewImages: FunctionComponent<IPreviewIages> = ({
  previewImages,
  isSelected,
  addSelectedImage
}): JSX.Element => {
  return (
    <div className="custom-DraftEditor-images">
      {previewImages.map((image: IImage) => {
        const { src, id } = image;
        return (
          <div
            className="custom-DraftEditor-previewImage"
            onClick={(): void => addSelectedImage(image)}
            key={id}
          >
            {isSelected(src) && (
              <span>
                <i className="material-icons">done</i>
              </span>
            )}
            <img src={src} />
          </div>
        );
      })}
    </div>
  );
};

export default PreviewImages;
