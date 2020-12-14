import { ControlledEditor } from "@monaco-editor/react";
import React from "react";
interface ICodeEditorProps {
  onChange: (...args: any[]) => void;
  value: string;
  language: string;
  height?: string;
}
const CodeEditor = ({
  value,
  onChange,
  language,
  height,
  ...attrs
}: ICodeEditorProps) => (
  <ControlledEditor
    height={height}
    language={language}
    value={value}
    onChange={onChange}
    {...attrs}
  />
);
CodeEditor.defaultProps = {
  height: "600px",
  language: "javascript",
  value: "",
};
export default CodeEditor;
