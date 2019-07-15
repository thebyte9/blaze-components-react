import { DraftBlockType, DraftInlineStyle, EditorState } from "draft-js";
import React, { FunctionComponent } from "react";
import StyleButton from "../StyleButton";

interface IInlineTypes {
  label: string;
  style: string;
}
interface IInlineControlsProps {
  editorState: EditorState;
  onToggle: (blockType: DraftBlockType) => void;
}
const InlineControls: FunctionComponent<IInlineControlsProps> = ({
  editorState,
  onToggle
}): JSX.Element => {
  const currentStyle: DraftInlineStyle = editorState.getCurrentInlineStyle();

  const INLINE_STYLES: IInlineTypes[] = [
    { label: "Bold", style: "BOLD" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
    { label: "Monospace", style: "CODE" }
  ];

  return (
    <div>
      {INLINE_STYLES.map(
        (type: IInlineTypes): JSX.Element => {
          const { label, style } = type;
          return (
            <StyleButton
              key={label}
              style={style}
              label={label}
              onToggle={onToggle}
              active={currentStyle.has(style)}
            />
          );
        }
      )}
    </div>
  );
};

export default InlineControls;
