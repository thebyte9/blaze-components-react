
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
    preview: [],
    filesToUpload: []
  }

  removeFile = (id) => {
    const preview = this.state.preview.filter(file => file.id !== id);
    this.setState({ preview: preview });
  }

  previewImage = (base64, name, id) => (
    <div key={id}>
      <img src={base64} alt="preview image" style={imageStyles}/>
      <span>{name}</span>
      <i onClick={() => this.removeFile(id)} className="material-icons">clear</i>
    </div>
  )

  previewFile = (name, id) => (
    <div key={id}>
      <i className="material-icons">attach_file</i>
      <span>{name}</span>
      <i onClick={() => this.removeFile(id)} className="material-icons">clear</i>
    </div>
  )

  handleDrop = ({ canceled, files, previewFiles }) => {
    const { preview, filesToUpload } = this.state;

    if (canceled) return this.setState({preview: []});

    this.setState({
      preview: [...preview, ...previewFiles],
      filesToUpload: [...filesToUpload, ...files]
    })
  }

  render() {
    const { handleDrop } = this;
    const previewFiles = this.state.preview.map(({name, base64, type, id}) => {
      if (type === 'image') return this.previewImage(base64, name, id)
      return this.previewFile(name, id)
    });
    return (
      <Modal
      isActive
      buttonText="Upload Files"
      title="Add media"
      actions={[['submit', () => {}, 'rounded outline']]}
      upload>
        <FileUpload handleDrop={handleDrop} style={styles}>
            {previewFiles}
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

