import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import Button from '@blaze-react/button';

const FileUpload = ({ children, handleDrop: handleDropProp, ...attr }) => {
  const area = useRef(null);
  const selectFile = useRef(null);

  const handleDragover = event => {
    event.stopPropagation();
    event.preventDefault();
  };

  const getPreview = files =>
    Promise.all(
      files.map(
        file =>
          new Promise((resolve, reject) => {
            if (file.type.includes('image')) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = e =>
                resolve({
                  id: uuidv1(),
                  name: file.name,
                  base64: e.target.result,
                  type: 'image'
                });
              reader.onerror = () => reject(new DOMException('Error parsing input file.'));
            } else {
              resolve({
                id: uuidv1(),
                name: file.name,
                type: 'file'
              });
            }
          })
      )
    );

  const processFiles = async (event, files) => {
    if (!files || !files.length) return;

    getPreview(files).then(previewFiles => handleDropProp({ event, files, previewFiles }));
  };

  const handleChange = event => {
    event.preventDefault();

    let { target: { files } = {} } = event;

    files = Object.values(files);

    processFiles(event, files);
  };

  useEffect(
    () => {
      const handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();

        let { dataTransfer: { files } = {} } = event;

        files = Object.values(files);

        processFiles(event, files);
      };

      const { current: currentArea } = area;

      currentArea.addEventListener('dragover', handleDragover);
      currentArea.addEventListener('drop', handleDrop);
    },
    [processFiles]
  );

  const handleBrowse = () => {
    const { current: currentSelectFile } = selectFile;
    currentSelectFile.click();
  };

  const handleCancel = event => {
    handleDropProp({ event, canceled: true });
  };

  return (
    <div ref={area} className="upload" {...attr}>
      <i className="material-icons">arrow_upward</i>
      <p>Drag &amp; drop file to upload</p>

      <div className="upload__browse">
        <Button onClick={handleBrowse}>Browse</Button>
        <input type="file" onChange={handleChange} ref={selectFile} style={{ display: 'none' }} />
      </div>

      <div className="upload__text">or</div>

      <Button onClick={handleCancel} modifiers="dark outline">
        Cancel
      </Button>

      {children}
    </div>
  );
};

FileUpload.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  handleDrop: PropTypes.func
};

FileUpload.defaultProps = {
  handleDrop: () => {},
  children: 'No content'
};

export default FileUpload;
