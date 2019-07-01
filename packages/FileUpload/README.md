
## Description

FileUpload component  is a great draggable area, move one or multiple images to a desired location and "drop" it there using a mouse or similar device.

## Usage

* simple FileUpload

```js

<FileUpload 
    handleDrop={({event, base64, files, canceled}) => {}}>
    // Preview files or any other logic
</FileUpload>

```

* Modal with FileUpload

```js
class ModalWithFileUpload extends Component {
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
            <FileUpload handleDrop={handleDrop}>
                {previewImages}
            </FileUpload>
          </Modal>
        )
      }
    }

    <ModalWithFileUpload />
```

## API

##### FileUpload can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| handleDrop | Function | () => {} | 
| children | Single or array of nodes | No content |

