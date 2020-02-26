import React from "react";
interface IFileUploadProps {
    children?: any;
    customPreview?: boolean;
    onChange: (...args: any[]) => void;
    handleDrop?: (...args: any[]) => void;
    handleLibraryClick?: (...args: any[]) => void;
    enableDragAndDrop?: boolean;
    actionText?: any;
}
declare const FileUpload: React.SFC<IFileUploadProps>;
export default FileUpload;
