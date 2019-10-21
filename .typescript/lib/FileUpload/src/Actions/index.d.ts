/// <reference types="react" />
interface IActions {
    handleLibraryClick?: (...args: any[]) => void;
    handleBrowse?: (...args: any[]) => void;
    handleChange?: (...args: any[]) => void;
    selectFile: any;
}
declare const Actions: ({ handleBrowse, handleLibraryClick, handleChange, selectFile }: IActions) => JSX.Element;
export default Actions;
