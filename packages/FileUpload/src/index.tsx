import Button from "@blaze-react/button";
import React, { useEffect, useRef } from "react";
interface IFileUploadProps {
  handleDrop: (...args: any[]) => any;
  children?: any;
}
const FileUpload: React.SFC<IFileUploadProps> = ({
  children,
  handleDrop: handleDropProp,
  ...attr
}) => {
  const area: any = useRef(null);
  const selectFile: any = useRef(null);
  const handleDragover = (event: any): void => {
    event.stopPropagation();
    event.preventDefault();
  };
  const getPreview = (files: any[]) =>
    Promise.all(
      files.map(
        file =>
          new Promise((resolve, reject) => {
            if (file.type && file.type.includes("image")) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = (e: any) =>
                resolve({
                  base64: e.target.result,
                  name: file.name,
                  type: "image"
                });
              reader.onerror = () =>
                reject(new DOMException("Error parsing input file."));
            } else {
              resolve({
                name: file.name,
                type: "file"
              });
            }
          })
      )
    );
  const processFiles = async (event: any, files: any): Promise<any> => {
    if (!files || !files.length) {
      return;
    }
    getPreview(files).then(
      (previewFiles: any): void => {
        handleDropProp({ event, files, previewFiles });
      }
    );
  };
  const handleChange = (event: any) => {
    event.preventDefault();
    let { target: { files = {} } = {} } = event;
    files = Object.values(files);
    processFiles(event, files);
  };
  useEffect(() => {
    const handleDrop = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      let { dataTransfer: { files = {} } = {} } = event;
      files = Object.values(files);
      processFiles(event, files);
    };
    const { current: currentArea } = area;
    currentArea.addEventListener("dragover", handleDragover);
    currentArea.addEventListener("drop", handleDrop);
  }, [processFiles]);
  const handleBrowse = () => {
    const { current: currentSelectFile } = selectFile;
    currentSelectFile.click();
  };
  const handleCancel = (event: any) => {
    handleDropProp({ event, canceled: true });
  };
  return (
    <div ref={area} className="upload" {...attr}>
      <div className="upload__drag-drop">
        <div className="upload__icon">
          <i className="material-icons">arrow_upward</i>
        </div>
        <p>Drag &amp; drop file to upload</p>
      </div>

      <div className="upload__browse">
      <div className="upload__text">or</div>
        <Button onClick={handleBrowse}>Browse</Button>
        <input
          type="file"
          onChange={handleChange}
          ref={selectFile}
          style={{ display: "none" }}
        />
      </div>

      <Button
        onClick={handleCancel}
        modifiers={[
          Button.availableModifiers.cancel
        ]}
      >
        Cancel
      </Button>

      {children}
    </div>
  );
};
FileUpload.defaultProps = {
  children: "No content",
  handleDrop: (): void => {
    return;
  }
};
export default FileUpload;
