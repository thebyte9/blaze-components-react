import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import uuidv1 from 'uuid/v1';
import Modal from '../../Modal';
import DragableArea from '../index';
import ModalReadme from '../README.md';
import { file } from '@babel/types';

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

storiesOf('DragbleArea', module)
  .addParameters({
    readme: {
      sidebar: ModalReadme
    },
  })
  .add('Introduction', () => {
    class DragAndDrop extends Component {
      state = {
        preview: [],
        files: []
      }

      handleDrop = ({ base64, canceled, files }) => {
        if (canceled) return this.setState({preview: []});

        const images = base64.map(src => <img key={uuidv1()} src={src} style={imageStyles}/>);
        this.setState({
          preview: [...this.state.preview, ...images],
          files: [...this.state.files, ...files]
        })
      }

      render() {
        return (
          <Modal
          isActive
          buttonText="Upload Files"
          title="Add media"
          actions={[['submit', () => {}, 'rounded outline']]}
          upload>
            <DragableArea handleDrop={this.handleDrop} style={styles}>
                <div>{this.state.preview}</div>
            </DragableArea>
          </Modal>
        )
      }
    }
    
    return (<div className="component-wrapper">
    <h1>Dragable Area</h1>
      <p>
      A modal dialog is a dialog that appears at the top of the main content. 
      Use a modal for dialog boxes, forms, confirmation messages or other content that can be accessed.
      </p> 

      <DragAndDrop />
  </div>)    

  });



