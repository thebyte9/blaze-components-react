import React from "react";
import { IHTMLProps } from "../../../interfaces";
import StyleButton from "../StyleButton";

const HTMLEditor = ({ onToggle }: IHTMLProps): JSX.Element => (
  <StyleButton
    label={<i className="material-icons">code</i>}
    onToggle={onToggle}
    data-cy='styleButton-HTMLEditor'
  />
);

export default HTMLEditor;
