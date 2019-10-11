import React, { useEffect, useState } from "react";
import FileList from "../FileList";

interface IDraggableFileUpload {
  handleLibraryClick?: (...args: any[]) => void;
  handleBrowse?: (...args: any[]) => void;
  handleCancel?: (...args: any[]) => void;
  area: any;
  customPreview?: boolean;
  previewImages: object[];
  children: JSX.Element | JSX.Element[];
}

const DraggableFileUpload = ({
  handleCancel,
  area,
  customPreview,
  previewImages,
  children,
  ...attrs
}: IDraggableFileUpload) => {
  const [imagesToPreview, setImagesToPreview] = useState(previewImages);

  useEffect(() => setImagesToPreview(previewImages), [previewImages]);

  return (
    <div ref={area} className="upload" {...attrs}>
      <div className="upload__drag-drop">
        <div className="upload__icon">
          <i className="material-icons">arrow_upward</i>
        </div>
        <p>Drag &amp; drop file to upload</p>
      </div>

      <div className="upload__browse">
        <div className="upload__text">or</div>
        {children}
      </div>

      {!customPreview && (
        <FileList previewImages={imagesToPreview} handleCancel={handleCancel} />
      )}
    </div>
  );
};

export default DraggableFileUpload;
