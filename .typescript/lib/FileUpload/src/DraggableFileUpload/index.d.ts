/// <reference types="react" />
interface IDraggableFileUpload {
    handleLibraryClick?: (...args: any[]) => void;
    handleBrowse?: (...args: any[]) => void;
    handleCancel?: (...args: any[]) => void;
    area: any;
    customPreview?: boolean;
    previewImages: object[];
    children: JSX.Element | JSX.Element[];
}
declare const DraggableFileUpload: ({ handleCancel, area, customPreview, previewImages, children, ...attrs }: IDraggableFileUpload) => JSX.Element;
export default DraggableFileUpload;
