import { DraftBlockType, EditorState } from "draft-js";
import { FunctionComponent } from "react";
interface IInlineControlsProps {
    editorState: EditorState;
    onToggle: (blockType: DraftBlockType) => void;
}
declare const InlineControls: FunctionComponent<IInlineControlsProps>;
export default InlineControls;
