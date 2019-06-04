import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import uuidv1 from 'uuid/v1';
import Modal from '../../Modal';
import DragableArea from '../index';
import ModalReadme from '../README.md';

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

storiesOf('DraggbleArea', module)
  .addParameters({
    readme: {
      sidebar: ModalReadme
    },
  })
  .add('Introduction', () => {
    class ModalWithDraggableArea extends Component {
      state = {
        previewImages: [],
        filesToUpload: []
      }

      handleDrop = ({ base64, canceled, files }) => {
        const { previewImages, filesToUpload } = this.state;

        if (canceled) return this.setState({previewImages: []});

        const images = base64.map(src => <img key={uuidv1()} src={src} style={imageStyles}/>);

        this.setState({
          previewImages: [...previewImages, ...images],
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
            <DragableArea handleDrop={handleDrop} style={styles}>
                <div>{previewImages}</div>
            </DragableArea>
          </Modal>
        )
      }
    }
    
    return (<div className="component-wrapper">
    <h1>Draggable Area</h1>
      <p>
      Draggable area is a great interface solution, move one or multiple images to a desired location and "drop" it there using a mouse or similar device.
      </p> 

      <ModalWithDraggableArea />
  </div>)    

  });



