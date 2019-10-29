import React from "react";
import StyleButton from "../StyleButton";

import { IHTMLProps } from "../../../interfaces";

const HTMLEditor = ({ onToggle, isDraftEditor }: IHTMLProps): JSX.Element => {
  return (
    <>
      <StyleButton
        label={<i className="material-icons">code</i>}
        onToggle={onToggle}
        active={!isDraftEditor}
      />
    </>
  );
};

export default HTMLEditor;
