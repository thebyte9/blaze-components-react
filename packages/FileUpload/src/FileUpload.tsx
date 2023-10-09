import cloneDeep from 'lodash.clonedeep';
import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Actions from './Actions';
import { DATA_ATTRIBUTS } from './constants';
import { NAME } from './constants';
import DraggableFileUpload from './DraggableFileUpload';
import FileList from './FileList';
interface IFileUploadProps {
  children?: any;
  customPreview?: boolean;
  onChange: (...args: any[]) => void;
  handleDrop?: (...args: any[]) => void;
  handleLibraryClick?: (...args: any[]) => void;
  enableDragAndDrop?: boolean;
  actionText?: any;
  selectOptions: any[];
}
const FileUpload: React.SFC<IFileUploadProps> = ({
  onChange,
  handleDrop: handleDropProp,
  customPreview,
  handleLibraryClick,
  enableDragAndDrop,
  actionText,
  selectOptions,
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
    const handler = setTimeout((): void => {
      onChange(filesToUpload);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [filesToUpload]);
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
      currentArea.addEventListener('dragover', handleDragover);
      currentArea.addEventListener('drop', handleDrop);
      return () => {
        currentArea.removeEventListener('dragover', handleDragover);
        currentArea.removeEventListener('drop', handleDrop);
      };
    }
    return;
  }, [previewImages, filesToUpload]);
  const getPreview = (files: any[]) =>
    Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            if (file.type && file.type.includes('image')) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = (e: any) =>
                resolve({
                  data: { ...DATA_ATTRIBUTS },
                  file: {
                    base64: e.target.result,
                    id: file.id,
                    name: file.name,
                    type: 'image',
                  },
                  name: '',
                });
              reader.onerror = () => reject(new DOMException('Error parsing input file.'));
            } else if (file.type && file.type.includes('video')) {
              resolve({
                file: {
                  id: file.id,
                  name: file.name,
                  type: 'video',
                },
                name: '',
              });
            } else {
              resolve({
                data: { ...DATA_ATTRIBUTS },
                file: {
                  id: file.id,
                  name: file.name,
                  type: 'doc',
                },
                name: '',
              });
            }
          }),
      ),
    );
  const processFiles = async (files: any): Promise<any> => {
    if (!files || !files.length) {
      return;
    }
    files = files.map((file: any) => {
      try {
        file.id = nanoid();
      } catch (e) {
        return file;
      }
      return file;
    });
    const previewFiles = await getPreview(files);
    const formatFiles = files.map((file: any) => ({
      data: { ...DATA_ATTRIBUTS },
      file,
    }));
    setFilesToUpload([...filesToUpload, ...formatFiles]);
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
      files.filter(({ file: { id } }: { file: { id: string } }) => id !== idToRemove);
    const fileToUploadUpdated = validFiles(filesToUpload);
    const previewImagesUpdated = validFiles(previewImages);
    setFilesToUpload(fileToUploadUpdated);
    setPreviewImages(previewImagesUpdated);
    onChange(fileToUploadUpdated);
    if (handleDropProp) {
      handleDropProp({
        previewFiles: previewImagesUpdated,
      });
    }
  };
  const copyToOthers = (name: string, index: number) => {
    const filesToUploadCopy = cloneDeep(filesToUpload);
    const previewImagesCopy = cloneDeep(previewImages);

    filesToUploadCopy.forEach((file: any, i: number) => {
      if (name === 'title') {
        file.name = filesToUploadCopy[index].name;
        previewImagesCopy[i].name = filesToUploadCopy[index].name;
      } else {
        file.data[name] = filesToUploadCopy[index].data[name];
        previewImagesCopy[i].data[name] = filesToUploadCopy[index].data[name];
      }
    });
    setFilesToUpload(filesToUploadCopy);
    setPreviewImages(previewImagesCopy);
  };

  const handleInputChange = ({ event }: any) => {
    const {
      target: { id, name, value },
    } = event;
    const filesToUploadCopy = cloneDeep(filesToUpload);
    const previewImagesCopy = cloneDeep(previewImages);
    const index = Number(id.split('-')[0]);
    if (name !== NAME) {
      const _name = name.split('-')[0];
      filesToUploadCopy[index].data[_name] = value;
      previewImagesCopy[index].data[_name] = value;
    } else {
      filesToUploadCopy[index][name] = value;
      previewImagesCopy[index][name] = value;
    }
    setFilesToUpload(filesToUploadCopy);
    setPreviewImages(previewImagesCopy);
  };
  const handleSelectChange = ({ event }: any, index: number) => {
    const {
      target: { value },
    } = event;
    const filesToUploadCopy = cloneDeep(filesToUpload);
    filesToUploadCopy[index].storeKey = value;
    setFilesToUpload(filesToUploadCopy);
  };
  return (
    <>
      {enableDragAndDrop ? (
        <DraggableFileUpload
          previewImages={previewImages}
          handleCancel={handleCancel}
          customPreview={customPreview}
          area={area}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          selectOptions={selectOptions}
          copyToOthers={copyToOthers}
          {...attr}
        >
          <Actions
            actionText={actionText}
            handleLibraryClick={handleLibraryClick}
            handleBrowse={handleBrowse}
            handleChange={handleChange}
            selectFile={selectFile}
          />
        </DraggableFileUpload>
      ) : (
        <>
          <Actions
            actionText={actionText}
            handleLibraryClick={handleLibraryClick}
            handleBrowse={handleBrowse}
            handleChange={handleChange}
            selectFile={selectFile}
          />
          {!customPreview && (
            <FileList
              previewImages={previewImages}
              handleCancel={handleCancel}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              selectOptions={selectOptions}
              copyToOthers={copyToOthers}
            />
          )}
        </>
      )}
    </>
  );
};
FileUpload.defaultProps = {
  actionText: 'Add Files',
  children: 'No content',
  customPreview: false,
  enableDragAndDrop: true,
  handleDrop: () => void 0,
  onChange: () => void 0,
};
export default FileUpload;
