import React from "react";
import MonacoEditor from "react-monaco-editor";

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
  <MonacoEditor
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
