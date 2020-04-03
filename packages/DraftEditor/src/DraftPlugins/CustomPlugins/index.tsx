import {
  DraftBlockType,
  DraftInlineStyleType,
  EditorState,
  RichUtils,
  SelectionState
} from "draft-js";
import React from "react";
import BlockControls from "./BlockControls";
import HTMLEditor from "./HTMLEditor";
import InlineControls from "./InlineControls";
import { Anchor, LinkControl } from "./LinkControl";

const CustomDraftPlugins = ({
  editorState,
  unSelectedText,
  onEditorChange,
  toggleDraftEditor
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

  return (
    <section className="custom-DraftEditor-utils">
      <BlockControls editorState={editorState} onToggle={toggleBlockType} />
      <div className="custom-DraftEditor-inlineControls">
        <InlineControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
        <>
          <LinkControl
            editorState={editorState}
            onToggle={toggleLink}
            unSelectedText={unSelectedText}
          />
          <HTMLEditor onToggle={toggleDraftEditor} />
        </>
      </div>
    </section>
  );
};

export { CustomDraftPlugins, Anchor };
