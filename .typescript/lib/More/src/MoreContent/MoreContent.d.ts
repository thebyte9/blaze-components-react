import React from "react";
interface IMoreContentProps {
    toggled?: boolean;
    isHeader?: boolean;
    isMoreMenu?: boolean;
    isDropdown?: boolean;
    handleToggle?: any;
    displayBg?: any;
}
declare const MoreContent: React.SFC<IMoreContentProps>;
export default MoreContent;
