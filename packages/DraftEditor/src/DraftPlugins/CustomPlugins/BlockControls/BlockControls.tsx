import { DraftBlockType, EditorState, SelectionState } from "draft-js";
import React, { FunctionComponent } from "react";
import StyleButton from "../StyleButton";

interface IBlockTypes {
  label: string;
  style: string;
}
interface IBlockControlsProps {
  editorState: EditorState;
  onToggle: (blockType: DraftBlockType) => void;
}
const BlockControls: FunctionComponent<IBlockControlsProps> = ({
  editorState,
  onToggle,
}): JSX.Element => {
  const selection: SelectionState = editorState.getSelection();
  const blockType: DraftBlockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const BLOCK_TYPES: IBlockTypes[] = [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
    { label: "Blockquote", style: "blockquote" },
    { label: "Code Block", style: "code-block" },
    { label: "H1", style: "header-one" },
    { label: "H2", style: "header-two" },
    { label: "H3", style: "header-three" },
    { label: "H4", style: "header-four" },
    { label: "H5", style: "header-five" },
    { label: "H6", style: "header-six" },
  ];

  return (
    <div className="custom-DraftEditor-controls">
      {BLOCK_TYPES.map(
        ({ label, style }: IBlockTypes): JSX.Element => (
          <StyleButton
            key={label}
            style={style}
            label={label}
            onToggle={onToggle}
            active={style === blockType}
          />
        )
      )}
    </div>
  );
};

export default BlockControls;
