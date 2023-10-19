import React, { Fragment } from 'react';
import { DOC, IMAGE } from '../constants';
import DocumentIcon from '../DocumentIcon';
import FileInputs from '../FileInputs';
const FileList = ({
  previewImages,
  handleCancel,
  handleInputChange,
  handleSelectChange,
  selectOptions,
  copyToOthers
}: {
  previewImages: any;
  handleCancel: any;
  handleInputChange: any;
  handleSelectChange: any;
  copyToOthers: (name: string, index: number) => void;
  selectOptions: any[];
}) => (
  <>
    {previewImages.map(
      (
        {
          file,
          name,
          data,
          storeKey
        }: {
          file: any;
          name: string;
          data: any | null;
          storeKey: string;
        },
        index: any,
      ) => {
        const fileInputsProps = {
          data,
          file,
          handleInputChange,
          handleSelectChange,
          index,
          name,
          selectOptions,
          storeKey,
          copyToOthers
        };
        const isImage = file.type === IMAGE;
        return (
          <Fragment key={file.id}>
            <div className="preview">
              <div className={`preview__file preview__file--${file.type}`}>
                {isImage ? <img src={file.base64} /> : <DocumentIcon />}
              </div>
              <div className="preview__details">
                <div className="preview__filename">{file.name}</div>
                <div className="preview__form">
                  {(isImage || file.type === DOC) && <FileInputs {...fileInputsProps} />}
                  <i
                    onClick={() => handleCancel(file.id)}
                    className="material-icons"
                    aria-hidden="true"
                    data-testid="delete"
                  >
                    delete_outline
                  </i>
                </div>
              </div>
            </div>
          </Fragment>
        );
      },
    )}
  </>
);
export default FileList;