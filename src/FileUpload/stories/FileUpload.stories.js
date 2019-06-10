import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import uuidv1 from 'uuid/v1';
import Modal from '../../Modal';
import FileUpload from '../index';
import FileUploadReadme from '../README.md';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100%'
}

const imageStyles = {
  height: '50px',
  width: '50px',
  borderRadius: '50%',
  margin: '5px'
}

storiesOf('FileUpload', module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme
    },
  })
  .add('Introduction', () => {
    class ModalWithFileUpload extends Component {
      state = {
        previewImages: [],
        filesToUpload: []
      }

      handleDrop = ({ base64, canceled, files, filesName }) => {
        const { previewImages, filesToUpload } = this.state;

        console.log(files)

        if (canceled) return this.setState({previewImages: []});

        const images = base64.map(src => <img key={uuidv1()} src={src} style={imageStyles}/>);

        this.setState({
          previewImages: [...previewImages, ...images, ...filesName],
          filesToUpload: [...filesToUpload, ...files]
        })
      }

      render() {
        const { state: { previewImages }, handleDrop } = this;
        return (
          <Modal
          isActive
          buttonText="Upload Files"
          title="Add media"
          actions={[['submit', () => {}, 'rounded outline']]}
          upload>
            <FileUpload handleDrop={handleDrop} style={styles}>
                <div>{previewImages}</div>
            </FileUpload>
          </Modal>
        )
      }
    }
    
    return (<div className="component-wrapper">
    <h1>FileUpload</h1>
      <p>
      FileUpload component  is a great draggable area, move one or multiple images to a desired location and "drop" it there using a mouse or similar device.
      </p> 

      <ModalWithFileUpload />
  </div>)    

  });



