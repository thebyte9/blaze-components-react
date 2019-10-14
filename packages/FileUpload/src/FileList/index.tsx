import React, { Fragment } from "react";
import DocumentIcon from "../DocumentIcon";

const IMAGE = "image";

const FileList = ({
  previewImages,
  handleCancel,
  handleInputChange
}: {
  previewImages: any;
  handleCancel: any;
  handleInputChange: any;
}) => (
  <>
    {previewImages.map((file: any, index: any) => (
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
            {file.type === IMAGE && (
              <>
                <label>Enter title</label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={file.title || ""}
                  id={index}
                  name="title"
                />
                <label>Enter alternative text image</label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={file.altText || ""}
                  id={index}
                  name="altText"
                />
                <label>Enter caption</label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={file.caption || ""}
                  id={index}
                  name="caption"
                />
              </>
            )}
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
