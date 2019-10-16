import Input from "@blaze-react/input";
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
        <div className="preview">
          <div className="preview__file">
            {file.type === IMAGE ? (
              <img src={file.base64} />
            ) : (
              <DocumentIcon />
            )}
          </div>
          <div className="preview__details">
            <div className="preview__filename">{file.name}</div>
            <div className="preview__form">
            {file.type === IMAGE && (
              <>
                <Input
                  label="Image title"
                  onChange={handleInputChange}
                  value={file.title || ""}
                  id={index}
                  name="title"
                />
                <Input
                  label="Alternative text"
                  onChange={handleInputChange}
                  value={file.altText || ""}
                  id={index}
                  name="altText"
                />
                <Input
                  label="Image caption"
                  onChange={handleInputChange}
                  value={file.caption || ""}
                  id={index}
                  name="caption"
                />
              </>
            )}
            <i
              onClick={() => handleCancel(file.id)}
              className="material-icons"
              aria-hidden="true"
            >
            delete_outline
            </i>
            </div>
          </div>
        </div>
      </Fragment>
    ))}
  </>
);

export default FileList;
