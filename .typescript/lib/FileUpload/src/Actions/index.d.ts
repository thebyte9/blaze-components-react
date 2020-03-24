/// <reference types="react" />
interface IActions {
    handleLibraryClick?: (...args: any[]) => void;
    handleBrowse?: (...args: any[]) => void;
    handleChange?: (...args: any[]) => void;
    selectFile: any;
    actionText: string;
}
declare const Actions: ({ handleBrowse, handleLibraryClick, handleChange, selectFile, actionText }: IActions) => JSX.Element;
export default Actions;
