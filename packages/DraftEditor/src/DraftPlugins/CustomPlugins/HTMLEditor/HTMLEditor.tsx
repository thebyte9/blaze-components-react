import React from "react";
import { IHTMLProps } from "../../../interfaces";
import StyleButton from "../StyleButton";

const HTMLEditor = ({ onToggle, isDraftEditor }: IHTMLProps): JSX.Element => (
  <StyleButton
    label={<i className="material-icons">code</i>}
    onToggle={onToggle}
    active={!isDraftEditor}
  />
);

export default HTMLEditor;
