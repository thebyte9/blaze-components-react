import { DraftInlineStyle } from "draft-js";
import React, { FunctionComponent } from "react";
import StyleButton from "../StyleButton";

import { IInlineControlsProps, IInlineTypes } from "../interfaces";

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
    <>
      {INLINE_STYLES.map(
        ({ label, style }: IInlineTypes): JSX.Element => (
          <StyleButton
            key={label}
            style={style}
            label={label}
            onToggle={onToggle}
            active={currentStyle.has(style)}
          />
        )
      )}
    </>
  );
};

export default InlineControls;
