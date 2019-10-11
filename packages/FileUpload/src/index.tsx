import React, { useEffect, useRef, useState } from "react";
import uuid from "uuid/v1";
import Actions from "./Actions";
import DraggableFileUpload from "./DraggableFileUpload";
import FileList from "./FileList";

interface IFileUploadProps {
  children?: any;
  customPreview?: boolean;
  onChange: (...args: any[]) => void;
  handleDrop?: (...args: any[]) => void;
  handleLibraryClick?: (...args: any[]) => void;
  enableDragAndDrop?: boolean;
}
const FileUpload: React.SFC<IFileUploadProps> = ({
  children,
  onChange,
  handleDrop: handleDropProp,
  customPreview,
  handleLibraryClick,
  enableDragAndDrop,
  ...attr
}) => {
  const [previewImages, setPreviewImages]: any[] = useState([]);
  const [filesToUpload, setFilesToUpload]: any[] = useState([]);
  const area: any = useRef(null);
  const selectFile: any = useRef(null);
  const handleDragover = (event: any): void => {
    event.stopPropagation();
    event.preventDefault();
  };

  useEffect(() => {
    const handleDrop = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      let { dataTransfer: { files = {} } = {} } = event;
      files = Object.values(files);
      processFiles(files);
      onChange(files);
    };
    const { current: currentArea } = area;
    if (enableDragAndDrop) {
      currentArea.addEventListener("dragover", handleDragover);
      currentArea.addEventListener("drop", handleDrop);
      return () => {
        currentArea.removeEventListener("dragover", handleDragover);
        currentArea.removeEventListener("drop", handleDrop);
      };
    }
    return;
  }, [previewImages, filesToUpload]);

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
                  id: uuid(),
                  name: file.name,
                  type: "image"
                });
              reader.onerror = () =>
                reject(new DOMException("Error parsing input file."));
            } else {
              resolve({
                id: uuid(),
                name: file.name,
                type: "file"
              });
            }
          })
      )
    );

  const processFiles = async (files: any): Promise<any> => {
    if (!files || !files.length) {
      return;
    }

    const previewFiles = await getPreview(files);
    setFilesToUpload([...filesToUpload, ...files]);
    setPreviewImages([...previewImages, ...previewFiles]);
    if (handleDropProp) {
      handleDropProp({ previewFiles: [...previewImages, ...previewFiles] });
    }
  };
  const handleChange = (event: any) => {
    event.preventDefault();
    let { target: { files = {} } = {} } = event;
    files = Object.values(files);
    processFiles(files);
    onChange(files);
  };

  const handleBrowse = () => {
    const { current: currentSelectFile } = selectFile;
    currentSelectFile.click();
  };
  const handleCancel = (idToRemove: string): void => {
    const validFiles = (files: any[]) =>
      files.filter(({ id }: { id: string }) => id !== idToRemove);
    const fileToUploadUpdated = validFiles(filesToUpload);
    const previewImagesUpdated = validFiles(previewImages);
    setFilesToUpload(fileToUploadUpdated);
    setPreviewImages(previewImagesUpdated);
  };

  return (
    <>
      {enableDragAndDrop ? (
        <DraggableFileUpload
          previewImages={previewImages}
          handleCancel={handleCancel}
          customPreview={customPreview}
          area={area}
          {...attr}
        >
          <Actions
            handleLibraryClick={handleLibraryClick}
            handleBrowse={handleBrowse}
            handleChange={handleChange}
            selectFile={selectFile}
          />
        </DraggableFileUpload>
      ) : (
        <>
          <Actions
            handleLibraryClick={handleLibraryClick}
            handleBrowse={handleBrowse}
            handleChange={handleChange}
            selectFile={selectFile}
          />
          {!customPreview && (
            <FileList
              previewImages={previewImages}
              handleCancel={handleCancel}
            />
          )}
        </>
      )}
    </>
  );
};
FileUpload.defaultProps = {
  children: "No content",
  customPreview: false,
  enableDragAndDrop: true,
  handleDrop: () => void 0,
  onChange: () => void 0
};
export default FileUpload;
