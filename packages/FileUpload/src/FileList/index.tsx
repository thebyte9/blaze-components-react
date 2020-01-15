import Input from "@blaze-react/input";
import React, { Fragment } from "react";
import { DATA_ATTRIBUTES, NAME } from "../constants";
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
    {previewImages.map(
      (
        {
          file,
          name,
          data
        }: {
          file: any;
          name: string;
          data: any | null;
        },
        index: any
      ) => {
        const sanitizedFileName = file.name && file.name.replace(".", "");

        return (
          <Fragment key={file.id}>
            <div className="preview">
              <div className={`preview__file preview__file--${file.type}`}>
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
                        value={name}
                        id={`${index}-title-${sanitizedFileName}`}
                        name={NAME}
                      />
                      <Input
                        label="Alternative text"
                        onChange={handleInputChange}
                        value={data.altText}
                        id={`${index}-altText-${sanitizedFileName}`}
                        name={`${DATA_ATTRIBUTES.ALT_TEXT}-${index}-caption-${sanitizedFileName}`}
                      />
                      <Input
                        label="Image caption"
                        onChange={handleInputChange}
                        value={data.caption}
                        id={`${index}-caption-${sanitizedFileName}`}
                        name={`${DATA_ATTRIBUTES.CAPTION}-${index}-caption-${sanitizedFileName}`}
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
        );
      }
    )}
  </>
);

export default FileList;
