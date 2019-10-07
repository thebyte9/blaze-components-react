import React, { Fragment } from "react";
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
      <Fragment key={file.id}>
        <div className="preview-container">
          <div className="preview-file-container">
            {file.type === IMAGE ? (
              <img className="preview-file" src={file.base64} />
            ) : (
              <DocumentIcon />
            )}
          </div>
          <div className="preview-filename-container">
            <p className="preview-filename">{file.name}</p>
            <i
              onClick={() => handleCancel(file.id)}
              className="fa fa-trash"
              aria-hidden="true"
            />
          </div>
        </div>
      </Fragment>
    ))}
  </>
);

export default FileList;
