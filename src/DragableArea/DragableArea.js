import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const DragableArea = ({ children, handleDrop: handleDropProp, ...attr }) => {
  const area = useRef(null);
  const selectFile = useRef(null);

  const handleDragover = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const getBase64 = files => Promise.all(
    files.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.readAsDataURL(file);
        reader.onload = e => resolve(e.target.result);
        reader.onerror = () => reject(new DOMException('Error parsing input file.'));
      });
    })
  );

  const processFiles = (event, files, type) => {
    if (!files && !files.length) return;

    getBase64(files).then((base64) => {
      if (type) event[type].clearData();
      return handleDropProp({ event, files, base64 });
    });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let { dataTransfer: { files } = {} } = event;

    files = Object.values(files);

    processFiles(event, files, 'dataTransfer');
  };

  const handleChange = (event) => {
    event.preventDefault();

    let { target: { files } = {} } = event;

    files = Object.values(files);

    processFiles(event, files);
  };

  useEffect(() => {
    const { current: currentArea } = area;

    currentArea.addEventListener('dragover', handleDragover);
    currentArea.addEventListener('drop', handleDrop);
  }, []);

  const handleBrowse = () => {
    const { current: currentSelectFile } = selectFile;
    currentSelectFile.click();
  };

  const handleCancel = (event) => {
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

      <Button onClick={handleCancel} modifiers="dark outline">Cancel</Button>

      { children }
    </div>
  );
};

DragableArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  handleDrop: PropTypes.func
};

DragableArea.defaultProps = {
  handleDrop: () => {},
  children: 'No content'
};

export default DragableArea;
