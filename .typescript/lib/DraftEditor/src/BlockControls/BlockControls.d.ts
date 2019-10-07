import { DraftBlockType, EditorState } from "draft-js";
import { FunctionComponent } from "react";
interface IBlockControlsProps {
    editorState: EditorState;
    onToggle: (blockType: DraftBlockType) => void;
}
declare const BlockControls: FunctionComponent<IBlockControlsProps>;
export default BlockControls;
