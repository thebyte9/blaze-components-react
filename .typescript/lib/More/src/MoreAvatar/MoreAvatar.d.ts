import React from "react";
interface IMoreAvatarProps {
    handleToggle: (...args: any[]) => any;
    label?: string;
    isHeader?: boolean;
    isMoreMenu?: boolean;
    className?: string;
    children?: any;
    toggled?: boolean;
    displayBg?: boolean;
    disabled?: boolean;
}
declare const MoreAvatar: React.SFC<IMoreAvatarProps>;
export default MoreAvatar;
