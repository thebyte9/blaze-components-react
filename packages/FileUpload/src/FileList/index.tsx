import React from "react";
import DocumentIcon from "../DocumentIcon";

const IMAGE = "image";

const FileList = ({
  previewImages,
  handleCancel
}: {
  previewImages: any;
  handleCancel: any;
}) => (
  <>
    {previewImages.map((file: any) => (
      <React.Fragment key={file.id}>
        <div className="preview-container">
          <div className="preview-file-container">
            {file.type === IMAGE ? (
              <img className="preview-file" src={file.base64} />
            ) : (
              <DocumentIcon />
            )}
          </div>
          {file.name}
          <i
            onClick={() => handleCancel(file.id)}
            className="fa fa-trash"
            aria-hidden="true"
          />
        </div>
      </React.Fragment>
    ))}
  </>
);

export default FileList;
