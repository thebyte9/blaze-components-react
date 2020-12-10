/// <reference types="react" />
interface ICodeEditorProps {
    onChange: (...args: any[]) => void;
    value: string;
    language: string;
    height?: string;
}
declare const CodeEditor: {
    ({ value, onChange, language, height, ...attrs }: ICodeEditorProps): JSX.Element;
    defaultProps: {
        height: string;
        language: string;
        value: string;
    };
};
export default CodeEditor;
