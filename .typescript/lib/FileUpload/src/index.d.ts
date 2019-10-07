import React from "react";
interface IFileUploadProps {
    handleDrop: (...args: any[]) => any;
    children?: any;
}
declare const FileUpload: React.SFC<IFileUploadProps>;
export default FileUpload;
