/// <reference types="react" />
import { ILinkControlProps } from "../../../interfaces";
declare const LinkControl: {
    ({ editorState, onToggle, unSelectedText }: ILinkControlProps): JSX.Element;
    defaultProps: {
        error: boolean;
        name: string;
    };
};
export default LinkControl;
