import { EditorState } from "draft-js";
import React, { FunctionComponent, useRef } from "react";
import StyleButton from "../StyleButton";

interface IInlineControlsProps {
  editorState: EditorState;
  onToggle: (newEditorState: EditorState, entityKey: string) => void;
}
const InlineControls: FunctionComponent<IInlineControlsProps> = ({
  editorState,
  onToggle
}): JSX.Element => {
  const selectFile: any = useRef(null);

  const handleChange = (event: any) => {
    event.preventDefault();
    let { target: { files = {} } = {} } = event;
    files = Object.values(files);
    processFiles(files);
  };

  const processFiles = async (files: any): Promise<any> => {
    if (!files || !files.length) {
      return;
    }
    getPreview(files).then((previewFiles: any): void =>
      previewFiles.forEach(({ base64 }: { base64: string }) =>
        insertImage(base64)
      )
    );
  };

  const getPreview = (files: any[]) =>
    Promise.all(
      files.map(
        file =>
          new Promise((resolve, reject) => {
            if (file.type && file.type.includes("image")) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = (e: any) =>
                resolve({
                  base64: e.target.result,
                  name: file.name,
                  type: "image"
                });
              reader.onerror = () =>
                reject(new DOMException("Error parsing input file."));
            } else {
              resolve({
                name: file.name,
                type: "file"
              });
            }
          })
      )
    );

  const handleBrowse = () => {
    const { current: currentSelectFile } = selectFile;
    currentSelectFile.click();
  };

  const insertImage = (base64: any) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "image",
      "IMMUTABLE",
      { src: base64 }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });
    onToggle(newEditorState, entityKey);
  };

  return (
    <div className="custom-DraftEditor-controls">
      <StyleButton
        label={<i className="material-icons">add_photo_alternate</i>}
        onToggle={handleBrowse}
      />
      <input
        type="file"
        onChange={handleChange}
        ref={selectFile}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default InlineControls;
