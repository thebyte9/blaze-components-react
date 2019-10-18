import React, { FunctionComponent } from "react";
import { IImage, IPreviewIages } from "../interfaces";

const PreviewImages: FunctionComponent<IPreviewIages> = ({
  previewImages
}): JSX.Element => {
  return (
    <div className="custom-DraftEditor-images">
      {previewImages.map((image: IImage) => {
        const { src, id, name } = image;
        return (
          <div className="custom-DraftEditor-previewImage" key={id}>
            <img src={src} />
            <div className="custom-DraftEditor-previewImageName">{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewImages;
