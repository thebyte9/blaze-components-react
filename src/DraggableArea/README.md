
## Description

DraggableArea is a great interface solution, move one or multiple images to a desired location and "drop" it there using a mouse or similar device.

## Usage

* simple DraggableArea

```js

<DragableArea 
    handleDrop={({event, base64, files, canceled}) => {}}>
    // Preview files or any other logic
</DragableArea>

```

* Modal with draggable area

```js
class ModalWithDraggableArea extends Component {
      state = {
        previewImages: [],
        filesToUpload: []
      }

      handleDrop = ({ base64, canceled, files }) => {
        const { previewImages, filesToUpload } = this.state;

        if (canceled) return this.setState({previewImages: []});

        const images = base64.map(src => (
            <img key={uuidv1()} src={src} style={imageStyles}/>
        ));

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
            <DragableArea handleDrop={handleDrop}>
                {previewImages}
            </DragableArea>
          </Modal>
        )
      }
    }

    <ModalWithDraggableArea />
```

## API

##### DraggableArea can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| handleDrop | Function | () => {} | 
| children | Single or array of nodes | No content |

