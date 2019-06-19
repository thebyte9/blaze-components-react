import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../../Modal';
import FileUpload from '../index';
import FileUploadReadme from '../README.md';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100%'
};

const wrapPreview = {
  display: 'flex',
  flexWrap: 'wrap'
};

const previewStyles = {
  height: '100px',
  width: '60px',
  margin: '5px',
  padding: '5px'
};

const imageStyles = {
  height: '50px',
  width: '50px',
  borderRadius: '50%',
  margin: '5px'
};

storiesOf('FileUpload', module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme
    }
  })
  .add('Introduction', () => {
    class ModalWithFileUpload extends Component {
      state = {
        preview: [],
        filesToUpload: []
      };

      removeFile = id => {
        const { preview } = this.state;
        const updatedPreview = preview.filter(file => file.id !== id);
        this.setState({ preview: updatedPreview });
      };

      previewImage = (base64, name, id) => (
        <div key={id} style={previewStyles}>
          <img src={base64} alt="preview alt" style={imageStyles} />
          <span>{name}</span>
          <i onClick={() => this.removeFile(id)} className="material-icons" role="button">
            clear
          </i>
        </div>
      );

      previewFile = (name, id) => (
        <div key={id} style={previewStyles}>
          <i className="material-icons">attach_file</i>
          <span>{name}</span>
          <i onClick={() => this.removeFile(id)} className="material-icons" role="button">
            clear
          </i>
        </div>
      );

      handleDrop = ({ canceled, files, previewFiles }) => {
        const { preview, filesToUpload } = this.state;

        if (canceled) return this.setState({ preview: [] });

        this.setState({
          preview: [...preview, ...previewFiles],
          filesToUpload: [...filesToUpload, ...files]
        });
      };

      render() {
        const {
          handleDrop,
          state: { preview }
        } = this;
        const previewFiles = preview.map(({ name, base64, type, id }) => {
          if (type === 'image') return this.previewImage(base64, name, id);
          return this.previewFile(name, id);
        });
        return (
          <Modal
            buttonText="Upload Files"
            title="Add media"
            actions={[['submit', () => {}, 'rounded outline']]}
            upload>
            <FileUpload handleDrop={handleDrop} style={styles}>
              <div style={wrapPreview}>{previewFiles}</div>
            </FileUpload>
          </Modal>
        );
      }
    }

    return (
      <div className="component-wrapper">
        <h1>FileUpload</h1>
        <p>
          {
            "FileUpload component is a great draggable area, move one or multiple images to a desired location and 'drop' it there using a mouse or similar device."
          }
        </p>

        <ModalWithFileUpload />
      </div>
    );
  });
