/// <reference types="react" />
interface IDraggableFileUpload {
    handleLibraryClick?: (...args: any[]) => void;
    handleBrowse?: (...args: any[]) => void;
    handleCancel?: (...args: any[]) => void;
    handleInputChange?: (...args: any[]) => void;
    handleSelectChange?: (...args: any[]) => void;
    area: any;
    customPreview?: boolean;
    previewImages: object[];
    selectOptions: any[];
    children: JSX.Element | JSX.Element[];
}
declare const DraggableFileUpload: ({ handleCancel, area, customPreview, previewImages, handleInputChange, handleSelectChange, children, selectOptions, ...attrs }: IDraggableFileUpload) => JSX.Element;
export default DraggableFileUpload;
