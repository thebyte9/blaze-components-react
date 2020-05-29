import {
  AtomicBlockUtils,
  DraftBlockType,
  DraftInlineStyleType,
  EditorState,
  RichUtils,
  SelectionState,
} from "draft-js";
import React from "react";
import BlockControls from "./BlockControls";
import HTMLEditor from "./HTMLEditor";
import { ImageControl } from "./ImageControl";
import InlineControls from "./InlineControls";
import { Anchor, LinkControl } from "./LinkControl";
import StyleButton from "./StyleButton";

const CustomDraftPlugins = ({
  editorState,
  selectedImages,
  handleLibraryClick,
  unSelectedText,
  onEditorChange,
  toggleDraftEditor,
  showImagePlugin,
  showEmbedPlugin,
  addHorizontalRule,
}: any) => {
  const toggleBlockType = (blockType: DraftBlockType): void =>
    onEditorChange(RichUtils.toggleBlockType(editorState, blockType));

  const toggleInlineStyle = (inlineStyle: DraftInlineStyleType): void =>
    onEditorChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  const toggleLink = (
    newEditorState: EditorState,
    selection: SelectionState,
    entityKey: string
  ): void => {
    onEditorChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
  };

  const handleClick = (
    newEditorState: EditorState,
    entityKey: string
  ): EditorState => {
    const stateWithImageInserted: EditorState = AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      entityKey,
      " "
    );
    onEditorChange(stateWithImageInserted);
    return stateWithImageInserted;
  };

  return (
    <section className="custom-DraftEditor-utils">
      <BlockControls editorState={editorState} onToggle={toggleBlockType} />
      <StyleButton
        style="HORIZONTAL_RULE"
        label="HR"
        onToggle={addHorizontalRule}
      />
      <div className="custom-DraftEditor-inlineControls">
        <InlineControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
        <>
          {showImagePlugin && (
            <ImageControl
              editorState={editorState}
              onToggle={handleClick}
              selectedImages={selectedImages}
              handleLibraryClick={handleLibraryClick}
            />
          )}
          <LinkControl
            editorState={editorState}
            onToggle={toggleLink}
            unSelectedText={unSelectedText}
          />
          {showEmbedPlugin && <HTMLEditor onToggle={toggleDraftEditor} />}
        </>
      </div>
    </section>
  );
};

export { CustomDraftPlugins, Anchor };
